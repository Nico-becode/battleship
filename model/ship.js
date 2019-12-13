class Ship{
    /*
        Implementation of a ship.
        it will have
            a fixed amount of health point,
            a specific name and
            the cases where it is in the grid
    */
    constructor(name, health){
        this.ship_case = {};
        this.health_point = health;
        this.name = name;
    }

    get_ship_case(){
        /*
            return de cases of the ship
        */
        let cases = {};
        for (let key in this.ship_case){
            cases[key] = this.ship_case[key];
        }
        return cases;
    }

    is_case_used(list_coord){
        /*
            retourn true if a coordinate found in list_coord is a case of the ship
            list_coord is an object with key: coordinate and value 'miss' or 'alive'
        */
        let result = false;
        for (let key in list_coord){
            if (key in this.ship_case) {
                result = true;
                break;
            }
        }
        return result;
    }

    set_ship_case(list_coord){        
        this.ship_case = list_coord;
    }

    dec_health_point(){ this.health_point--;}
    get_health_point(){return this.health_point;}
}

module.exports = {
    Ship: Ship
}