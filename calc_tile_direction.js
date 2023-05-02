function calc_tile_direction(height, tile) {
    return ((height + tile) & 1) + 1;
} // end of calc tile direction

module.exports = calc_tile_direction;