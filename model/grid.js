const Ship = require('./ship').Ship;

class Grid{
    constructor(){
        this.length = 10;
        this.hit_cases = {};
        this.ships = [];
    }

    // add_ship(){
    //     for(let i = 0; i < 5; i++){
    //         const ship = new Ship();
    //         ship.place_ship(i);
    //         this.ships.push(ship); 
    //     }
        
    // }

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

    in_hit_cases(coordinate){
        let result = false;
        if (this.hit_cases[coordinate] != undefined) {
            result = true;
        }
        return result;
    }

    add_hit_cases(data_case){
        for(let key in data_case){
            this.hit_cases[key] = data_case[key];
        }
    }

    random_grid(){

        const type_ship = {
            'carrier': 5,
            'battleship': 4,
            'cruiser': 3,
            'submarine': 3,
            'destroyer': 2
        }

        for (let key in type_ship){
            const ship = new Ship(key, type_ship[key]);
            let list_case;
            let i = 0;
            while(i < 1000) { // can be replace by while true
                const direction = Math.floor(Math.random() * 2);
                let bound_x = this.length - type_ship[key] + 1;
                let bound_y = this.length;
                if ( direction == 1 ){
                    bound_x = this.length;
                    bound_y = this.length - type_ship[key] + 1;
                }
                const x = Math.floor(Math.random() * bound_x);
                const y = Math.floor(Math.random() * bound_y);
                list_case = {};
                for (let i = 0; i < type_ship[key]; i++){
                    if (direction == 1) list_case[`${x } ${y + i}`] = 'alive';
                    else list_case[`${x + i} ${y}`] = 'alive';
                }
                if (!this.is_case_used(list_case)){
                    break;
                }
                i++;
            }
            ship.set_ship_case(list_case);
            this.ships.push(ship);
        }

        if (this.ships.length !== 5) {
            throw "Can't generate a randomize grid. Too much iterations"
        }        
    }

    is_case_used(try_case){
        let result = false;
        for (let i = 0; i < this.ships.length; i++){
            if(this.ships[i].is_case_used(try_case)){
                result = true;
                break;
            }
        }
        return result;
    }

    hit(coordinate){
        let data = {
            shot: {},
            use: false
        }
        if (!this.in_hit_cases(coordinate)){
            data.shot[coordinate] = "miss";
            for (let i = 0; i < this.ships.length; i++){
                if (this.ships[i].is_case_used(data.shot)){
                    data.shot[coordinate] = "destroy";
                    this.ships[i].dec_health_point();
                    break;
                }
            }
        }
        else {
            data.use = true;
        }

        this.add_hit_cases(data.shot);
        return data;
    }
}

module.exports = {
    Grid: Grid,
}