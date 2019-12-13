//import class
const Game = require('./model/game').Game;

//import modules
const EXPRESS = require('express');
const APP = EXPRESS();
const SERVER = require('http').createServer(APP)
const IO = require('socket.io').listen(SERVER);
const ENT = require('ent');

const PORT = process.env.PORT || 8769;
let count = 0;

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

    socket.on('shot', (coordinate) => {
        const shot = game.shoot(coordinate, 1);
        if (!shot.use){
            socket.emit('display_shoot', JSON.stringify(shot.shot));
            if(shot.win){
                win(0);
            }
            else {
                enemy_turn(game);
            }
        }
        else {
            player_turn();
        }
        
    });

    const player_turn = () => {
        const data = {
            turn: true
        }
        socket.emit('your_turn', JSON.stringify(data));
    };

    const enemy_turn = (game) => {
        const shot = game.random_shot(0);
        count++;
        socket.emit('enemy_shot', JSON.stringify(shot.shot));
        if (shot.win) {
            win(1);
        }
        else {
            player_turn()
        }
        
    };

    const win = (player) => {
        const name = game.get_name(player);
        socket.emit('win', name);
    };
});

SERVER.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
});