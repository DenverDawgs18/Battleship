const ship = require('./ship');
const gameboard = require('./gameboard')

// Test one: hit function works as expected (updates number of hits on a given ship)



test('Check that hit was called', () => {
    const shh = new ship (3);
    shh.hit()
    expect(shh.hits).toBe(1)
}
)
// Test two: ocean function works as expected (this ensures length is working) and ensures sunk is true
test('ocean works as expected', () => {
    const shh = new ship(2);
    shh.hit();
    shh.hit();
    expect(shh.sunk).toBe(true)

})

// Those are the only tests for the ship class (using classes because they look more like python which is my fav lang)



// Test three p o:  make sure gameboards are placing ships at a coordinate
// This is going to make gameboards implemented as a 2d array and at those coordinates it will be replaced by something
// that says ship X 
test.only('ship is placed at a coordinate', () => {
    let g = new gameboard ();
    g.placeShip((1, 1), (3, 1));
    expect(g.board[0][0]).toBe('ship');
    expect(g.board[1][0]).toBe('ship');
    expect(g.board[2][0]).toBe('ship');
    expect(g.ships.length).toBe(1);

})


// Test four: gameboards cannot place ships if there is a ship there 
test('ship cannot place ship where one is', () => {
    let g = new gameboard ();
    g.placeShip((1,1), (3,1));
    expect(g.placeShip((1,1), (1, 3))).toThrow(TypeError)
})

// Test five: recieveAttack works as expected - takes a pair of coords, checks if a ship is hit. This is the hit case

// Test fiveB: recieveAttack works when the attack misses

// Test 6: Gameboard properly determines if all of its ships are in the ocean


