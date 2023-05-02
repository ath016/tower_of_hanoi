function calc_tile_num_of_moves(i, tile_period) {
    return (i - (i % tile_period)) / tile_period;
} // end of calc tile number of moves

module.exports = calc_tile_num_of_moves;