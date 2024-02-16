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
playerBoard.placeShip([0,2],[2,2])
let computerBoard = new gameboard();
computerBoard.createArr();
computerBoard.placeShip([0,0], [2,0]);
computerBoard.placeShip([0,2], [4,2])
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
let playerCells = [];
let computerCells = [];
const displayManager = (function () {
    const pwrapper = document.querySelector('.pwrapper');
    const cwrapper = document.querySelector('.cwrapper')
    const displayBoards = () => {
        for(let i = 0; i < 10; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            for(let j = 0; j < 10; j++){
                let n = document.createElement("div");
                n.dataset.one = i;
                n.dataset.two = j;
                playerCells.push(n)
                if(playerBoard.board[i][j]){
                    n.style.backgroundColor = '#ADD8E6';
                    n.addEventListener('click', () => {
                        
                    })
                }
                else{
            
                }
                n.classList.add('cell')
                row.appendChild(n)
            }
            pwrapper.appendChild(row)
        }
        for(let i = 0; i < 10; i++){
            let row = document.createElement('div');
            row.classList.add('row')
            for(let j = 0; j < 10; j++){
                let n = document.createElement("div");
                n.dataset.one = i;
                n.dataset.two = j;
                computerCells.push(n)
                if(computerBoard.board[i][j]){
                    n.style.backgroundColor = 'gray';
                    n.addEventListener('click', () => {
                        n.style.backgroundColor = '#FF7F7F';
                        computerBoard.recieveAttack([n.dataset.one, n.dataset.two]);
                        if(computerBoard.allOcean){
                            alert('player has won')
                        }
                    })
                }
                else{
                    n.addEventListener('click', () => {
                        n.style.backgroundColor = 'white';
                    })
                }
                n.classList.add('cell')
                row.appendChild(n)
            }
            cwrapper.appendChild(row)
        }
    }
    return {displayBoards}
})();
displayManager.displayBoards()

function disableComputer(){
    for(let i = 0; i < computerCells.length; i++){
        computerCells[i].style.pointerEvents = "none";
    }
}
disableComputer()
function enableComputer(){
    for(let i = 0; i < computerCells.length; i++){
        computerCells[i].style.pointerEvents = "auto";
    }
}
enableComputer()