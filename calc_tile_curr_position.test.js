const calc_tile_curr_position = require('./calc_tile_curr_position');

test('calculates the tile current position', () => {
    expect(calc_tile_curr_position(1,0)).toBe(0);
    expect(calc_tile_curr_position(1,1)).toBe(1);
    expect(calc_tile_curr_position(1,2)).toBe(2);
    
    expect(calc_tile_curr_position(2,0)).toBe(0);
    expect(calc_tile_curr_position(2,1)).toBe(2);
    expect(calc_tile_curr_position(2,2)).toBe(1);
}); // end of test