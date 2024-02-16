const ship = require('./ship');

class gameboard{
    
    constructor(){
        this.board = [];
        this.ships = [];
        this.misses = [];
        this.allOcean = false;
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
        let vertDelta  = Math.abs(coord1[1] - coord2[1]);
        for(let i = 0; i <= vertDelta; i++){
            if(this.board[coord1[0]][coord1[1] + i] = 'ship' + `${this.ships.length}` !== ""){
                this.board[coord1[0]][coord1[1] + i] = 'ship' + `${this.ships.length}`;
            }
            else{
                throw new Error()
            }
            
        }
        if(horDelta !== 0){
            this.ships.push(new ship(horDelta + 1));
        }
        if(vertDelta !== 0){
            this.ships.push(new ship(vertDelta + 1));
        }
    }
    recieveAttack = (coord) => {
        if (this.board[coord[0]][coord[1]] !== ""){
            let s = this.board[coord[0]][coord[1]];
            s = Number(s.charAt(s.length -1))
            let shi = this.ships[s];
            shi.hit()
            this.allSunk()
        }
        else{
            this.misses.push(coord)
        }

    }
    allSunk = () => {
        let check = true;
        for(const shh of this.ships){
            if(!shh.sunk){
                this.allOcean = false;
                check = false;
            }
        }
        if(check){
            this.allOcean = true;
        }
        
    }
}

module.exports = gameboard;