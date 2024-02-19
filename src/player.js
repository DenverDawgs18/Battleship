class player{
    constructor(){
        this.illegalMoves = [];
    }
    attack = (coord, board) => {
        board.recieveAttack(coord)
    }
    randomAttack = (board) => {
        let coord = [];
        let check = true;
        coord.push(this.getRandom11());
        coord.push(this.getRandom11());
        console.log(coord)
        for(let i = 0; i < this.illegalMoves.length; i++){
            if(this.illegalMoves[i][0] === coord[0] && this.illegalMoves[i][1] === coord[1]){

                check = false;
            }
        }
        if(check){
            this.illegalMoves.push(coord)
            this.attack(coord, board)
        }
        else{
            this.randomAttack(board)
        }
        
    }
    getRandom11 = () => {
        return Math.floor(Math.random() * 10)
    }
}


module.exports  = player;