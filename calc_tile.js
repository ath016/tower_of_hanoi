function calc_tile(tile_period) {
    return Math.log2(tile_period) - 1;
} // end of calc tile

module.exports = calc_tile;