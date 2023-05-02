const calc_tile = require('./calc_tile');

test('calculates the tile to be moved', () => {
    expect(calc_tile(2)).toBe(0);
    expect(calc_tile(4)).toBe(1);
    expect(calc_tile(8)).toBe(2);
    expect(calc_tile(16)).toBe(3);
}); // end of test