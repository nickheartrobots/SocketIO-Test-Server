import express from 'express'
import http from 'http'
import SocketIO from 'socket.io'

const app = express;
const server = http.Server(app);
const io = new SocketIO(server);

//process.env.PORT is the constant for Heroku automatically assigned port
//if on Heroku, use their port, otherwise use 47236
const PORT = process.env.PORT || 47236;

server.listen(PORT, () => {
    console.log(`Server is now running on ${ PORT }...`);
})

setInterval(() => {
    console.log(`Server running on ${ PORT }...`);
}, 300000)

io.on('connection', (socket) => {
    console.log("Player Connected!");
    socket.emit('socketID', { id: socket.id });
    socket.broadcast.emit('newPlayer', { id:socket.id});

    socket.on('disconnect', () => {
        console.log("Player Disconnected");
    });
});
