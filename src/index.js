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
                
                if(playerBoard.board[i][j]){
                    n.style.backgroundColor = '#ADD8E6';
                    n.dataset.hit = true;

                }
                else{
                    n.dataset.hit = false;
                }
                n.classList.add('cell')
                playerCells.push(n)
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
                        game(n.dataset.one, n.dataset.two)
                    })
                }
                else{
                    n.addEventListener('click', () => {
                        n.style.backgroundColor = 'white';
                        game(n.dataset.one, n.dataset.two)
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
function enableComputer(){
    for(let i = 0; i < computerCells.length; i++){
        computerCells[i].style.pointerEvents = "auto";
    }
}
function computerMove(){
    computer.randomAttack(playerBoard)
    let whites = 0;
    let reds  = 0;
    for(let i = 0; i < playerBoard.misses.length; i++){
        for(let j = 0; j < playerCells.length; j++){
            if(playerCells[j].dataset.hit == 'false' && 
            playerBoard.misses[i][0] == playerCells[j].dataset.one && playerBoard.misses[i][1] == playerCells[j].dataset.two){
                whites++
                playerCells[j].style.backgroundColor = 'white'
            }
        }
    }
    for(let i = 0; i < playerBoard.hits.length; i++){
        for(let j = 0; j < playerCells.length; j++){
            if(playerCells[j].dataset.hit == 'true' && 
            playerBoard.hits[i][0] == playerCells[j].dataset.one && playerBoard.hits[i][1] == playerCells[j].dataset.two){
                reds++
                playerCells[j].style.backgroundColor = 'red'
            }
        }
    }
 

}

function game(one, two){
    disableComputer();
    computerBoard.recieveAttack([Number(one), Number(two)]);
    if(computerBoard.allOcean){
        alert('player has won')
    }
    computerMove();
    if(playerBoard.allOcean){
            alert('computer has won')
        }
    enableComputer();
}