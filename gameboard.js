import ship from './ship'

class gameboard{
    
    constructor(){
        this.board = [];
        this.ships = [];
    }
    createArr = () => {
        for(let i = 0; i < 10; i++){
            let n = new Array(10).fill();
            this.board.push(n);
        }
    }
    placeShip = () => {

    }
}

module.exports = gameboard;