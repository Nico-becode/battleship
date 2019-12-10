const Statistic = require('./statistic');

module.exports = class Player{
    constructor(){
        this.name = "";
        this.grid = "hello";
        this.enemyGrid = "";
        this.statistic = new Statistic();
    }

    set_name(name){ this.name = name;}
};