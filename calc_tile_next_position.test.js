const calc_tile_next_position = require('./calc_tile_next_position');

test('calculates the tile next position', () => {
    expect(calc_tile_next_position(0,1)).toBe(1);
    expect(calc_tile_next_position(1,1)).toBe(2);
    expect(calc_tile_next_position(2,1)).toBe(0);
    expect(calc_tile_next_position(0,2)).toBe(2);
    expect(calc_tile_next_position(1,2)).toBe(0);
    expect(calc_tile_next_position(2,2)).toBe(1);
}); // end of test