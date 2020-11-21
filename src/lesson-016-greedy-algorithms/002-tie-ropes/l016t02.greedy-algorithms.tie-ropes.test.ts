import solution = require('./l016t02.greedy-algorithms.tie-ropes.solution');

describe('tieRopes test', () => {
  it('test Array > 1, Only Small Integers for A and K', () => {
    // maximum numbers of tied ropes of length greater than or equal to a given integer K = 4 from array A = [1, 2, 3, 4, 1, 1, 3]
    const output = solution(4, [1, 2, 3, 4, 1, 1, 3]);
    // expected result should be 3
    expect(output).toEqual(3);
  });
});
