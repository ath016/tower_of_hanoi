const tower_of_hanoi = require('./tower_of_hanoi');

test('running tower of hanoi algorithm', () => {
    const input = 4;
    const output = [
        [0,0,1],[1,0,2],[0,1,2],[2,0,1],
        [0,2,0],[1,2,1],[0,0,1],[3,0,2],
        [0,1,2],[1,1,0],[0,2,0],[2,1,2],
        [0,0,1],[1,0,2],[0,1,2]
    ]; // end of output

    expect(tower_of_hanoi(input)).toEqual(output);
})