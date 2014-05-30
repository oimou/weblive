define(function (require) {
  'use strict';

  var MikuModel = require('model/MikuModel');

  return Backbone.View.extend({
    initialize: function () {
      this.miku = new MikuModel();
    }
  });
});
