import solution = require('./l010t02.prime-and-composite-numbers.flags.solution');

describe('flags test', () => {
  it('test Array > 1, All Values > 0, Only Small Values  ', () => {
    const output = solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]);
    expect(output).toEqual(3);
  });
});
