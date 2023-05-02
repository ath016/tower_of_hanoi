function tower_of_hanoi(height) {
    const calc_tile_period = require('./calc_tile_period');
    const calc_tile = require('./calc_tile');
    const calc_tile_direction = require('./calc_tile_direction');
    const calc_tile_num_of_moves = require('./calc_tile_num_of_moves');
    const calc_tile_curr_position = require('./calc_tile_curr_position');
    const calc_tile_next_position = require('./calc_tile_next_position');

    const num_of_moves = Math.pow(2, height) - 1;
    const moves = [];

    for(let i = 0; i < num_of_moves; i++) {
        // how often the tile is moved
        const tile_period = calc_tile_period(i);
        
        // the level of the tile being moved
        const tile = calc_tile(tile_period);
        
        // direction of the tile being moved
        const tile_direction = calc_tile_direction(height, tile);
        
        // how many moves tile took already
        const tile_num_of_moves = calc_tile_num_of_moves(i, tile_period);
        
        // location of tile being moved
        const tile_curr_position = calc_tile_curr_position(tile_direction, tile_num_of_moves);
        
        // next location of tile being moved
        const tile_next_position = calc_tile_next_position(tile_direction, tile_curr_position);
        
        moves.push([tile, tile_curr_position, tile_next_position]);
    } // end of for

    return moves;
} // end of tower of hanoi

module.exports = tower_of_hanoi;