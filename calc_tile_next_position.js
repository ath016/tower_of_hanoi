function calc_tile_next_position(tile_direction, tile_curr_position) {
    return (tile_direction + tile_curr_position) % 3;
} // end of calc tile next position

module.exports = calc_tile_next_position;