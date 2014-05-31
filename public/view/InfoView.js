define(function (require) {
  'use strict';

  require('backbone.iobind');

  return Backbone.View.extend({
    el: '#info',

    initialize: function () {
      this.initEvent();
    },

    initEvent: function () {
      App.miku.on('change:ready', _(this.onMikuReadyStateChange).bind(this));
    },

    onMikuReadyStateChange: function (model) {
      this.$el.text(model.get('name'));
    }
  });
});
