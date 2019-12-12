const Player = require('./player');

module.exports = class Game {
    constructor() {
        this.players = [null, null];
        this.turn = null;
    }

    add_player(player, username){
        this.players[player] = new Player(username);

    }

    // add_ship(player){
    //     this.players[player].add_ship();
    // }

    get_grid(player){
        return this.players[player].get_grid();
    }

    random_generate(){
        for (let i = 0; i < this.players.length; i++){
            this.players[i].random_grid();
        }
    }

};