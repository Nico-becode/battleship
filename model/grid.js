const Ship = require('./ship').Ship;

class Grid{
    constructor(){
        this.length = 10;
        this.hit_cases = {"0 0": 'destroy', '8 8': 'miss'};
    }
}

class Grid_player extends Grid{
    constructor(){
        super();
        this.ships = [];
    }

    add_ship(){
        for(let i = 0; i < 5; i++){
            const ship = new Ship();
            ship.place_ship(i);
            this.ships.push(ship); 
        }
        
    }

    get_coordinate(){
        let cases = {};
        this.ships.forEach(ship => {
            const ship_case = ship.get_ship_case();
            for (let key in ship_case){
                cases[key] = ship_case[key];
            }
        });
        cases = {...cases, ...this.hit_cases}
        return cases;
    }
}

module.exports = {
    Grid: Grid,
    Grid_player: Grid_player
}