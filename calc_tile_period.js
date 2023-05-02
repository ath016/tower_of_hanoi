function calc_tile_period(i) {
    return (i ^ (i + 1)) + 1;
} // end of calc tile period

module.exports = calc_tile_period;