class Ship{
    constructor(){
        this.ship_case = {};
        this.health_point = null;
        this.name = null;
    }

    get_ship_case(){
        let cases = {};
        for (let key in this.ship_case){
            cases[key] = this.ship_case[key];
        }
        return cases;
    }

    place_ship(coord){
        switch(coord){
            case 0:
                this.ship_case = {
                    '0 0': 'alive',
                    '0 1': 'alive',
                    '0 2': 'alive',
                    '0 3': 'alive',
                    '0 4': 'alive'
                };
                this.health_point = 5;
                this.name = 'carrier';
                break;
            case 1:
                    this.ship_case = {
                        '1 0': 'alive',
                        '1 1': 'alive',
                        '1 2': 'alive',
                        '1 3': 'alive'
                    };
                    this.health_point = 4;
                    this.name = 'battleship';
                break;
            case 2:
                    this.ship_case = {
                        '3 0': 'alive',
                        '3 1': 'alive',
                        '3 2': 'alive',
                    };
                    this.health_point = 3;
                    this.name = 'cruiser';
                break;
            case 3:
                    this.ship_case = {
                        '5 0': 'alive',
                        '5 1': 'alive',
                        '5 2': 'alive',
                    };
                    this.health_point = 3;
                    this.name = 'submarine';
                break;
            case 4:
                    this.ship_case = {
                        '7 0': 'alive',
                        '7 1': 'alive',
                    };
                    this.health_point = 2
                    this.name = 'destroyer';
                break;
        }
    }
}

module.exports = {
    Ship: Ship
}