define(function (require) {
  'use strict';

  require('backbone');

  return Backbone.View.extend({
    initialize: function () {
      console.assert(App.miku);

      var canvas = App.miku.canvas;
      $('body').append(canvas);
    },

    setup: function () {
      App.miku.setup();
    }
  });
});
