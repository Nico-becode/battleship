//import class
const Game = require('./model/game');

//import modules
const EXPRESS = require('express');
const APP = EXPRESS();
const SERVER = require('http').createServer(APP)
const IO = require('socket.io').listen(SERVER);

const PORT = 8769;

const createGame = (username) => {
        const game = new Game();
        game.add_player('player', username);
        console.log(game)
        return game;
};

APP.use(EXPRESS.static('public'));

IO.sockets.on('connection', (socket) => {
    let game;
    
    socket.on('username', (username) => {
        game = createGame(username);
    });
    socket.on('shoot', () => {
        console.log(game);
    });
});

SERVER.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});