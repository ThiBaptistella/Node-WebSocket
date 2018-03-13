//make connection
var socket = io.connect('http://localhost:4000/');

var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var message = document.getElementById('message');
var feedback = document.getElementById('feedback');

// handle event
btn.addEventListener('click', function() {
  socket.emit('chat',{
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener('keypress', function() {
  socket.emit('typing', handle.value);

})

socket.on('chat', function (data) {
  output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing', function (data) {
  feedback.innerHTML += '<p><em>' + data + ' is tyoing the message... </em></p>';
});
