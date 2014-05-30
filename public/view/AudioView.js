define(function (require) {
  'use strict';

  var AudioModel = require('model/AudioModel');

  return Backbone.Model.extend({
    initialize: function () {
      this.audioModel = new AudioModel({
        src: 'audio/tell-your-world.mp3'
      });

      this.initEvent();
    },

    initEvent: function () {
      this.listenTo(this.audioModel, 'load', this.onLoadAudio);
    },

    onLoadAudio: function () {
      this.audioModel.start();
    }
  });
});
