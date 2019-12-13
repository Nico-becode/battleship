const Player = require('./player').Player;

class Game {
    constructor() {
        this.players = [null, null];
        this.turn = null;
    }

    get_name(player){
        return this.players[player].get_name();
    }

    add_player(player, username){
        this.players[player] = new Player(username);

    }

    get_grid(player){
        return this.players[player].get_grid();
    }

    random_generate(){
        for (let i = 0; i < this.players.length; i++){
            this.players[i].random_grid();
        }
    }
    shoot(coordinate, player) {
        return this.players[player].hit(coordinate);
    }

    random_shot(player){
        return this.players[player].random_hit();
    }
};

module.exports = {
    Game: Game 
}