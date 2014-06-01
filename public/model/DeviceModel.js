define(function (require) {
  return Backbone.Model.extend({
    defaults: function () {
      return {
        type: ''
      };
    },

    initialize: function () {
      this.initEvent();
    },

    initEvent: function () {
      this.on('change:type', _(this.onChangeType).bind(this));
    },

    onChangeType: function () {
      App.socket.emit('device:update');
    }
  });
});
