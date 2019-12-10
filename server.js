const Game = require('./model/game');
const EXPRESS = require('express');
const APP = EXPRESS();
const SERVER = require('http').createServer(APP)
const IO = require('socket.io').listen(SERVER);

const PORT = 8769;

APP.use(EXPRESS.static('public'));

IO.sockets.on('connection', (socket) => {
    const game = new Game();
    console.log(game._turn)
});

SERVER.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});