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
let counter = 0;
playerBoard.createArr();
let computerBoard = new gameboard();
computerBoard.createArr();
let computer = new player();
let playerCells = [];
let computerCells = [];
const displayManager = (function () {
    const pwrapper = document.querySelector('.pwrapper');
    const cwrapper = document.querySelector('.cwrapper')
    const clearBoard = () => {
        pwrapper.replaceChildren()
        cwrapper.replaceChildren()
    }
    const displayBoards = () => {
        let Lrow = [];
        
        for(let i = 0; i < 10; i++){
            let label = document.createElement('div');
            label.textContent = String.fromCharCode(i + 65);
            label.classList.add('label')
            label.classList.add('vert');
            Lrow.push(label)
            
        }
        let labelRow = document.createElement('div');
        labelRow.classList.add('row');
        labelRow.classList.add('labelRow')
        for(let i = 0; i < Lrow.length; i++){
            labelRow.appendChild(Lrow[i]);
        }
        pwrapper.appendChild(labelRow)
        

        for(let i = 0; i < 10; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            let label = document.createElement('div');
            label.textContent = i + 1;
            label.classList.add('label')
            row.appendChild(label)

            for(let j = 0; j < 10; j++){
                let n = document.createElement("div");
                n.dataset.one = i;
                n.dataset.two = j;
                
                if(playerBoard.board[i][j]){
                    n.style.backgroundColor = '#ADD8E6';
                    n.dataset.hit = true;

                }
                else{
                    n.style.backgroundColor = 'gray';
                    n.dataset.hit = false;
                }
                n.classList.add('cell')
                playerCells.push(n)
                row.appendChild(n)
            }
            pwrapper.appendChild(row)
        }
        let LCrow = [];
        
        for(let i = 0; i < 10; i++){
            let label = document.createElement('div');
            label.textContent = String.fromCharCode(i + 65);
            label.classList.add('label')
            label.classList.add('vert');
            LCrow.push(label)
            
        }
        let ClabelRow = document.createElement('div');
        ClabelRow.classList.add('row');
        ClabelRow.classList.add('labelRow')
        for(let i = 0; i < LCrow.length; i++){
            ClabelRow.appendChild(LCrow[i]);
        }
        cwrapper.appendChild(ClabelRow)
        for(let i = 0; i < 10; i++){
            let row = document.createElement('div');
            row.classList.add('row');
            let label = document.createElement('div');
            label.textContent = i + 1;
            label.classList.add('label')
            row.appendChild(label)

            for(let j = 0; j < 10; j++){
                let n = document.createElement("div");
                n.dataset.one = i;
                n.dataset.two = j;
                n.style.backgroundColor = 'gray';
                computerCells.push(n)
                
                if(computerBoard.board[i][j]){
                    n.addEventListener('click', () => {
                        n.style.backgroundColor = '#FF7F7F';
                        if(counter === 5){
                            game(n.dataset.one, n.dataset.two)
                        }
                        
                    })
                }
                else{
                    n.addEventListener('click', () => {
                        n.style.backgroundColor = 'white';
                        if(counter === 5){
                            game(n.dataset.one, n.dataset.two)
                        }
                        
                    })
                }
                n.classList.add('cell')
                row.appendChild(n)
            }
            cwrapper.appendChild(row)
        }
    }
    return {displayBoards, clearBoard}
})();


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
function randomNum(num){
    return Math.floor(Math.random() * num)
}
function randomCPUship(len){
    let dir = randomNum(2) + 1;
    if(dir === 1){
        let check = true;
        while (check){
            try{
                let coord1 = randomNum(11 - len);
                let coord2 = randomNum(11)
                let coord3  = coord1 + len - 1; 
                computerBoard.placeShip([coord1, coord2], [coord3, coord2])
                check = false;
            }
            catch{

            }
        }
    }
    else if (dir === 2){
        let check = true;
        while (check){
            try{
                let coord1 = randomNum(11 - len);
                let coord2 = randomNum(11)
                let coord3  = coord1 + len - 1;
                computerBoard.placeShip([coord2, coord1], [coord2, coord3])
                check = false;
            }
            catch{

            }
        }
    }
}
function game(one, two){
        console.log('running')
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

function main(){
    randomCPUship(5)
    randomCPUship(4)
    randomCPUship(3)
    randomCPUship(3)
    randomCPUship(2)
    displayManager.displayBoards()
}
displayManager.displayBoards()
disableComputer()
let form = document.querySelector('.place');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let sel = Number(document.getElementById('len').value);
    let startingCoord = document.getElementById('startingCoord').value;
    let dir;
    let ele = document.getElementsByName('direction');
    for(let i = 0; i < ele.length; i++){
        if(ele[i].checked){
            dir = ele[i].value;
        }
    }
    let selection = document.getElementById('len')
    let letter = startingCoord.substring(0,1);
    let num = null;
    switch (letter){
        case 'A':
            num = 0;
            break;
        case 'B':
            num = 1;
            break;
        case 'C':
            num = 2;
            break;
        case 'D':
            num = 3;
            break;
        case 'E':
            num = 4;
            break;
        case 'F':
            num = 5;
            break;
        case 'G':
            num = 6;
            break;
        case 'H':
            num = 7;
            break;
        case 'I':
            num = 8;
            break;
        case 'J':
            num = 9;
            break;
    }
    if(num === null){
        alert('Please enter a valid coordinate')
    }
    let n = Number(startingCoord.substring(1,2))
    let coord1 = [];
    
    let coord2 = [];
    if(dir === 'vertical'){
        coord1.push(n - 1)
        coord1.push(num)
        coord2.push(coord1[0] + sel - 1)
        coord2.push(coord1[1])
    }
    else if(dir === 'horizontal'){
        coord1.push(n - 1)
        coord1.push(num)
        coord2.push(coord1[0])
        coord2.push(coord1[1] + sel - 1)
        
        
        
    }
    try{
        playerBoard.placeShip(coord1, coord2)
        displayManager.clearBoard()
        displayManager.displayBoards();
        
        selection.remove(selection.selectedIndex)
        counter++
        console.log(counter)
    }
    catch{
        alert('ships cannot overlap or go out of bounds')
    
    }
    if(counter === 5){
        enableComputer()
    }

})

