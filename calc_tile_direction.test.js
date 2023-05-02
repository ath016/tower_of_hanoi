const calc_tile_direction = require('./calc_tile_direction');

test('calculates the tile direction', () => {
    expect(calc_tile_direction(2,1)).toBe(2);
    expect(calc_tile_direction(2,2)).toBe(1);

    expect(calc_tile_direction(3,1)).toBe(1);
    expect(calc_tile_direction(3,2)).toBe(2);
}); // end of test