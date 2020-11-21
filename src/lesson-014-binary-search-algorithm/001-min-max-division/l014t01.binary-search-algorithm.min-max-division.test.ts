import solution = require('./l014t01.binary-search-algorithm.min-max-division.solution');

describe('minMaxDivision test', () => {
  it('test K > 1, M > 1, Values Array > 0, No Empty Blocks', () => {
    const output = solution(3, 5, [2, 1, 5, 1, 2, 2, 2]);
    expect(output).toEqual(6);
  });
});
