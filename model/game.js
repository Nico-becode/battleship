const Player = require('./player');

module.exports = class Game {
    constructor() {
        this.player = [null, null];
        this.turn = null;
    }

    add_player(choice, username){
        switch(choice){
            case 'player':
                this.player[0] = new Player();
                this.player[0].set_name(username);
                break;
            case 'ai':
                this.player[1] = new Player();
        }
    }

};