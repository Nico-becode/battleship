//import class
const Game = require('./model/game');

//import modules
const EXPRESS = require('express');
const APP = EXPRESS();
const SERVER = require('http').createServer(APP)
const IO = require('socket.io').listen(SERVER);
const ENT = require('ent');

const PORT = 8769;

const createGame = (username) => {
        const game = new Game();
        game.add_player(0, ENT.encode(username));
        game.add_player(1, 'Bot_1')
        try {
            game.random_generate();
        }
        catch(e) {
            console.error(e);
        }
        
        // game.add_ship(0);
        return game;
};

APP.use(EXPRESS.static('public'));

IO.sockets.on('connection', (socket) => {
    let game;
    
    socket.on('username', (username) => {
        game = createGame(username);
        const grid = game.get_grid(0);
        socket.emit('diplay_grid', JSON.stringify(grid));
    });

    socket.on('shoot', (coordinate) => {
        console.log(coordinate);
    });
});

SERVER.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});