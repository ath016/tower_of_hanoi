function calc_tile_curr_position(tile_direction, tile_num_of_moves) {
    return (tile_direction * tile_num_of_moves) % 3;
} // end of calc tile current position

module.exports = calc_tile_curr_position;