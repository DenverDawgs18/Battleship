class ship{
    constructor(length){
        this.length = length; 
        this.hits = 0;
        this.sunk = false;
    }
    hit = () => {
        this.hits = this.hits + 1;
        this.ocean()
    }
    ocean = () => {
        if(this.hits >= this.length){
            this.sunk = true;
        }
        else{
            this.sunk = false;
        }
    }

}

module.exports = ship;