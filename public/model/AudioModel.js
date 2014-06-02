define(function (require) {
  'use strict';

  require('backbone');
  var BufferLoader = require('lib/buffer-loader/buffer-loader');

  return Backbone.Model.extend({
    initialize: function (attr) {
      var audio = this.audio = new Audio();
      audio.addEventListener('canplaythrough', _(this.onLoad).bind(this));
      audio.src = attr.src;

      this.ctx = new AudioContext();
    },

    start: function () {
      var src = this.ctx.createMediaElementSource(this.audio);
      src.connect(this.ctx.destination);
      this.audio.play();
    },

    onLoad: function () {
      this.trigger('load');
    }
  });
});
