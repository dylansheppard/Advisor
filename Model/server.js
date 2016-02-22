var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8000);

function handler (req, res) {
  fs.readFile('/students.json',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading students.json FILE');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'mr D' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});