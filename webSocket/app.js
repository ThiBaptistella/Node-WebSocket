var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files set up
app.use(express.static('public'));
//view engine set up
app.set('view engine', 'ejs');
//scket.io set up
var io = socket(server);
io.on('connection', function (socket) {
  console.log('conected', socket.id);

  socket.on('chat', function (data) {
    io.sockets.emit('chat', data);
  });
  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data);
  });
});
