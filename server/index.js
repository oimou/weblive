var express = require('express');
var app = express();
var socketio = require('socket.io');
var server;
var io;

app.use(express['static'](__dirname + '/../public'));

server = app.listen(process.env.PORT || 3939);

io = socketio(server);

io.on('connection', function (socket) {
  socket.on('miku:update', function (miku) {
    console.log('miku:', miku);
    socket.broadcast.emit('miku:update', miku);
  });

  socket.on('device:update', function (device) {
    console.log('device:', device);
  });
});
