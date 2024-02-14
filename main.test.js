import ship from './ship';

// Test one: hit function works as expected (updates number of hits on a given ship)
jest.mock('./main')

// Test two: ocean function works as expected (this ensures length is working) and ensures sunk is true

// Those are the only tests for the ship class (using classes because they look more like python which is my fav lang)



// Test three p o:  make sure gameboards are placing ships at a coordinate
// This is going to make gameboards implemented as a 2d array and at those coordinates it will be replaced by something
// that says ship X 


// Test four: gameboards cannot place ships if there is a ship there 


// Test five: recieveAttack works as expected - takes a pair of coords, checks if a ship is hit. This is the hit case

// Test fiveB: recieveAttack works when the attack misses

// Test 6: Gameboard properly determines if all of its ships are in the ocean


