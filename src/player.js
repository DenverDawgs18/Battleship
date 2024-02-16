class player{
    constructor(){
        this.illegalMoves = [];
    }
    attack = (coord, board) => {
        board.recieveAttack(coord)
    }
    randomAttack = (board) => {
        let coord = [];
        coord.push(this.getRandom11());
        coord.push(this.getRandom11());
        this.illegalMoves.push(coord)
        this.attack(coord, board)
    }
    getRandom11 = () => {
        return Math.floor(Math.random() * 10)
    }
}


module.exports  = player;