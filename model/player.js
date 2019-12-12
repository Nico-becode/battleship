const Statistic = require('./statistic').Statistic;
const Grid = require('./grid').Grid;
const Grid_player = require('./grid').Grid_player;

module.exports = class Player{
    constructor(name){
        this.name = name;
        this.grid_player = new Grid_player();
        this.grid_enemy = new Grid();
        this.statistic = new Statistic();
    }

    // add_ship(){
    //     this.grid_player.add_ship();
    //     console.log(this.grid_player);
    // }

    get_grid() {
        return this.grid_player.get_coordinate();
    }

    random_grid(){
        this.grid_player.random_grid();
    }

};