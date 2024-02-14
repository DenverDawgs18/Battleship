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


// other test make sure board is created properly
test('board created properly', () => {
    let g = new gameboard ();
    g.createArr()
    expect(g.board.length).toBe(10)
})
// Test three p o:  make sure gameboards are placing ships at a coordinate
// This is going to make gameboards implemented as a 2d array and at those coordinates it will be replaced by something
// that says ship X 
test('ship is placed at a coordinate', () => {
    let g = new gameboard ();
    g.createArr()
    g.placeShip([0, 0], [2, 0]);
    expect(g.board[0][0]).toBe('ship0');
    expect(g.board[1][0]).toBe('ship0');
    expect(g.board[2][0]).toBe('ship0');
    expect(g.ships.length).toBe(1);

})


// Test four: gameboards cannot place ships if there is a ship there 
test.only('ship cannot place ship where one is', () => {
    let g = new gameboard ();
    g.createArr()
    g.placeShip([0,0], [2,0])
    expect(() => g.placeShip([0,0], [2,0])).toThrow()
})

// Test five: recieveAttack works as expected - takes a pair of coords, checks if a ship is hit. This is the hit case

// Test fiveB: recieveAttack works when the attack misses

// Test 6: Gameboard properly determines if all of its ships are in the ocean


