define(function (require) {
  'use strict';

  var MikuModel = require('model/MikuModel');

  return Backbone.View.extend({
    initialize: function () {
      var size = 512
      var canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      canvas.style.border = 'solid black 1px';

      document.body.appendChild(canvas);

      this.miku = new MikuModel({}, {
        canvas: canvas
      });
    }
  });
});
