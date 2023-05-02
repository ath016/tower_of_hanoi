const calc_tile_period = require('./calc_tile_period');

test('calculates the period of step', () => {
    expect(calc_tile_period(0)).toBe(2);
}); // end of test