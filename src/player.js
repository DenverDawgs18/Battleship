class player{
    constructor(){
        this.illegalMoves = [];
        this.nextMoves = [];
        this.checked = [];
        this.counter = 0;
    }
    attack = (coord, board) => {
        board.recieveAttack(coord)
    }
    randomAttack = (board) => {
        if(board.hits.length > this.counter){
            if(board.hits[this.counter][1] + 1 < 10 
            && board.hits[this.counter][1] + 1 > 0){
                let temp = [];
                temp.push(board.hits[this.counter][0])
                temp.push(board.hits[this.counter][1] + 1)
                let check = true;
                for(let i = 0; i < this.illegalMoves.length; i++){
                    if(this.illegalMoves[i][0] ===temp[0] && this.illegalMoves[i][1] === temp[1]){
        
                        check = false;
                    }
                }
                if(check){
                    console.log(temp, 1)
                    this.nextMoves.push(temp);
                    this.illegalMoves.push(temp)
                }
            }
            if( board.hits[this.counter][0] + 1 < 10 
            &&(board.hits[this.counter][0] + 1) > 0){

                let temp = [];
                temp.push(board.hits[this.counter][0] + 1)
                temp.push(board.hits[this.counter][1])
                let check = true;
                for(let i = 0; i < this.illegalMoves.length; i++){
                    if(this.illegalMoves[i][0] === temp[0] && this.illegalMoves[i][1] === temp[1]){
        
                        check = false;
                    }
                }
                if(check){
                    console.log(temp, 2)
                    this.nextMoves.push(temp);
                    this.illegalMoves.push(temp)
                }

            }
            if(board.hits[this.counter][0] - 1 < 10 
            &&board.hits[this.counter][0] - 1 > 0){

                let temp = [];
                temp.push(board.hits[this.counter][0] - 1)
                temp.push(board.hits[this.counter][1])
                let check = true;
                for(let i = 0; i < this.illegalMoves.length; i++){
                    if(this.illegalMoves[i][0] === temp[0] && this.illegalMoves[i][1] === temp[1]){
        
                        check = false;
                    }
                }
                if(check){
                    console.log(temp, 3)
                    this.nextMoves.push(temp);
                    this.illegalMoves.push(temp)
                }

            }
            if(board.hits[this.counter][1] - 1 < 10 
            && board.hits[this.counter][1] - 1 > 0){
                let temp = [];
                temp.push(board.hits[this.counter][0])
                temp.push(board.hits[this.counter][1] - 1)
                let check = true;
                for(let i = 0; i < this.illegalMoves.length; i++){
                    if(this.illegalMoves[i][0] === temp[0] && this.illegalMoves[i][1] === temp[1]){
        
                        check = false;
                    }
                }
                if(check){
                    console.log(temp, 4)
                    this.nextMoves.push(temp);
                    this.illegalMoves.push(temp)
                }

            }
            this.counter++
        }
        if(this.nextMoves.length !== 0){
            console.log(this.nextMoves[0], 5)
            this.attack(this.nextMoves[0], board)
            this.nextMoves.shift();

        }
        else{
            let coord = [];
        let check = true;
        coord.push(this.getRandom11());
        coord.push(this.getRandom11());
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
        
        
    }
    getRandom11 = () => {
        return Math.floor(Math.random() * 10)
    }
}


module.exports  = player;