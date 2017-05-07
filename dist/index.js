'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _express2.default;
var server = _http2.default.Server(app);
var io = new _socket2.default(server);

var PORT = process.env.PORT || 47236;

server.listen(PORT, function () {
    console.log('Server is now running on ' + PORT + '...');
});

io.on('connection', function (socket) {
    console.log("Player Connected!");
    socket.emit('socketID', { id: socket.id });
    socket.broadcast.emit('newPlayer', { id: socket.id });

    socket.on('disconnect', function () {
        console.log("Player Disconnected");
    });
});
//# sourceMappingURL=index.js.map