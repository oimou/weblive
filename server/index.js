var express = require('express');
var app = express();
var socketio = require('socket.io');
var server;
var io;

app.use(express['static'](__dirname + '/../public'));

server = app.listen(process.env.PORT || 3939);

io = socketio(server);
