import ship from './ship';
import gameboard from './gameboard';
import player from './player';





let g = new gameboard ();
g.createArr();
g.placeShip([0,0],[0,2])
console.log(g.board)
