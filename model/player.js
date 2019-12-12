const Statistic = require('./statistic').Statistic;
const Grid = require('./grid').Grid;

class Player{
    constructor(name){
        this.name = name;
        this.grid = new Grid();
        this.statistic = new Statistic();
    }

    // add_ship(){
    //     this.grid.add_ship();
    //     console.log(this.grid);
    // }

    get_grid() {
        return this.grid.get_coordinate();
    }

    random_grid(){
        this.grid.random_grid();
    }
    hit(coordinate){
        const data = this.grid.hit(coordinate);
        return data;
    }
};

module.exports = {
    Player: Player
}