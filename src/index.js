import express from 'express'
import http from 'http'
import SocketIO from 'socket.io'

const app = express;
const server = http.Server(app);
const io = new SocketIO(server);

const port = process.env.PORT || 47236;
console.log(port);

server.listen(port, () => {
    console.log("Server is now running...");
});

io.on('connection', (socket) => {
    console.log("Player Connected!");
    socket.emit('socketID', { id: socket.id });
    socket.broadcast.emit('newPlayer', { id:socket.id});

    socket.on('disconnect', () => {
        console.log("Player Disconnected");
    });
});
