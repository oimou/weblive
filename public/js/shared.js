define(function (require) {
  var Shared = {};
  var DeviceModel = require('model/DeviceModel');

  //
  //  socket.io
  //
  var io = require('socket.io');
  var socket = io.connect();
  Shared.socket = socket;

  //
  //  device type
  //
  Shared.device = new DeviceModel();

  return Shared;
});
