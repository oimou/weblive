define(function (require) {
  require('backbone');
  var uuid = require('uuid');

  return Backbone.Model.extend({
    defaults: function () {
      return {
        publicId: uuid.v4(),
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
      App.socket.emit('device:update', this.toJSON());
    }
  });
});
