module.exports = class Statistic {
    constructor(){
        this.win = 0;
        this.lose = 0;
        this.total = 0;
    }

    get_win(){ return this.win;}
    get_lose(){ return this.lose;}
    get_total(){ return this.total;}

    set_win(amount) { this.win += amount;}
    set_lose(amount) { this.lose += amount;}
    set_total(amount) { this.total += amount;}
}