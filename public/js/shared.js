define(function (require) {
  var Shared = {};

  //
  //  socket.io
  //
  var io = require('socket.io');
  var socket = io.connect();
  Shared.socket = socket;

  return Shared;
});
