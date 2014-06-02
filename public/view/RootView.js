define(function (require) {
  'use strict';

  var StageView = require('view/StageView');
  var AudioView = require('view/AudioView');
  var InfoView = require('view/InfoView');
  var MikuModel = require('model/MikuModel');

  return Backbone.View.extend({
    el: document,

    initialize: function () {
      App.miku = new MikuModel();

      this.stageView = new StageView();
      this.audioView = new AudioView();
      this.infoView = new InfoView();

      this.initEvent();
    },

    initEvent: function () {
      this.$el.on('click', '#setup-stage', _(this.onClickSetupStage).bind(this));
    },

    onClickSetupStage: function () {
      App.device.set('type', 'stage');
      this.stageView.setup();
    }
  });
});
