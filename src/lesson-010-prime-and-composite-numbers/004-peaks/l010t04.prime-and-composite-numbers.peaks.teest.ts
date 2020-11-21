import solution = require('./l010t04.prime-and-composite-numbers.peaks.solution');

describe('peaks test', () => {
  it('test Array > 3, Possible Blocks > 1, Only Values > 0', () => {
    const output = solution([1, 2, 3, 4, 1, 2, 3, 4, 6, 2]);
    expect(output).toEqual(3);
  });
});
