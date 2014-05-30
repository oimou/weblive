define(function (require) {
  'use strict';

  var StageView = require('view/StageView');
  var AudioView = require('view/AudioView');

  return Backbone.View.extend({
    initialize: function () {
      this.stageView = new StageView();
      this.audioView = new AudioView();
    }
  });
});
