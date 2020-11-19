import solution = require('./l003t03.time-complexity.tape-equilibrium.solution');

describe('tapeEquilibrium test', () => {
  it('test Possible Slices > 1, Only Positive Integers', () => {
    const output = solution([3, 1, 2, 4, 3]);
    // expected result = 1
    expect(output).toEqual(1);
  });
});
