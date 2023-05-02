const calc_tile_num_of_moves = require('./calc_tile_num_of_moves');

test('calculates how many times the tile moved', () => {
    expect(calc_tile_num_of_moves(0, 2)).toBe(0)
    expect(calc_tile_num_of_moves(1, 4)).toBe(0)
    expect(calc_tile_num_of_moves(2, 2)).toBe(1)
    expect(calc_tile_num_of_moves(3, 8)).toBe(0)
    expect(calc_tile_num_of_moves(4, 2)).toBe(2)
    expect(calc_tile_num_of_moves(5, 4)).toBe(1)
    expect(calc_tile_num_of_moves(6, 2)).toBe(3)
    expect(calc_tile_num_of_moves(7, 16)).toBe(0)
    expect(calc_tile_num_of_moves(8, 2)).toBe(4)
    expect(calc_tile_num_of_moves(9, 4)).toBe(2)
    expect(calc_tile_num_of_moves(10, 2)).toBe(5)
    expect(calc_tile_num_of_moves(11, 8)).toBe(1)
    expect(calc_tile_num_of_moves(12, 2)).toBe(6)
    expect(calc_tile_num_of_moves(13, 4)).toBe(3)
    expect(calc_tile_num_of_moves(14, 2)).toBe(7)
}); // end of test