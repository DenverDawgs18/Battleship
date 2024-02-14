const ship = require('./ship')

class gameboard{
    
    constructor(){
        this.board = [];
        this.ships = [];
    }
    createArr = () => {
        for(let i = 0; i < 10; i++){
            let n = new Array(10).fill("");
            this.board.push(n);
        }
    }
    placeShip = (coord1, coord2) => {
        let horDelta = Math.abs(coord1[0] - coord2[0]);
        for(let i = 0; i < horDelta; i++){
            if(this.board[coord1[0] + i][coord1[1]] !== ""){
                throw new Error()
            }
        }
        for(let i = 0; i <= horDelta; i++){
            this.board[coord1[0] + i][coord1[1]] = 'ship' + `${this.ships.length}`;
        }
        let vertDelta  = Math.abs(coord1[1] - coord2[1])
        for(let i = 0; i < vertDelta; i++){
            if(this.board[coord1[0]][coord1[1] + i] !== ""){
                throw new Error()
            }
        }
        for(let i = 0; i <= vertDelta; i++){
            this.board[coord1[0]][coord1[1] + i] = 'ship' + `${this.ships.length}`;
        }
        if(horDelta !== 0){
            this.ships.push(new ship(horDelta));
        }
        if(vertDelta !== 0){
            this.ships.push(new ship(vertDelta));
        }
    }
}

module.exports = gameboard;