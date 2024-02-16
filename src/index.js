import ship from './ship';
import gameboard from './gameboard';
import player from './player';







/*
Psuedocode
create 2 boards (might need four later)
create a while loop that ends once one board.allOcean is true ends
in the loop prompt player for a coord, attack gameboard using that test if allOcean is true;
otherwise have player's board be attacked using player.randomAttack
test for allOcean and end loop if true
*/
let playerBoard = new gameboard();
playerBoard.createArr();
playerBoard.placeShip([0,0],[2,0]);
playerBoard.placeShip([0,1],[2,1])
let computerBoard = new gameboard();
computerBoard.createArr();
computerBoard.placeShip([0,0], [2,0]);
computerBoard.placeShip([0,1], [2,1])
console.log(playerBoard.board, computerBoard.board)
let check = true;
let playa = new player();
let computer = new player();

// while(check){
//     let Pratt = prompt("Player attack: ").split(',');
//     playa.attack(Pratt, computerBoard);
//     if(computerBoard.allOcean === true){
//         alert('player has won')
//         break;
//     }
//     else{
//         computer.randomAttack(playerBoard);
//         if(playerBoard.allOcean === true){
//             alert('computer has won')
//             break;
//         }
//     }}

const displayManager = (function () {
    const displayBoards = () => {
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                let n = document.createElement("div");
                n.textContent = playerBoard.board[i][j]
                document.body.appendChild(n)
            }
        }
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                let n = document.createElement("div");
                n.textContent = computerBoard.board[i][j];
                document.body.appendChild(n)
            }
        }
    }
    return {displayBoards}
})();
displayManager.displayBoards()

