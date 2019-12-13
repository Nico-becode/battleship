const Statistic = require('./statistic').Statistic;
const Grid = require('./grid').Grid;

class Player{
    /*
        Represent a player in the game
        It will have
            name: pseudo of the player
            grid: his grid
            statistic: hit statistic in the game
    */
    constructor(name){
        this.name = name;
        this.grid = new Grid();
        this.statistic = new Statistic();
    }

    get_name(){return this.name;}

    get_grid() {
        return this.grid.get_coordinate();
    }

    random_grid(){
        /*
            make a random grid for the player
        */
        this.grid.random_grid();
    }
    hit(coordinate){
        /*
            return the data of the shot fired by the enemy
        */
        const data = this.grid.hit(coordinate);
        return data;
    }
    random_hit(){
        /*
            return the data fired by the AI
        */
        return this.grid.random_hit();
    }
};

module.exports = {
    Player: Player
}