class Ship{
    constructor(name, health){
        this.ship_case = {};
        this.health_point = health;
        this.name = name;
    }

    get_ship_case(){
        let cases = {};
        for (let key in this.ship_case){
            cases[key] = this.ship_case[key];
        }
        return cases;
    }

    is_case_used(list_coord){
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