import solution = require('./l012t01.euclidean-algorithm.chocolates-by-numbers.solution');

describe('chocolatesByNumbers test', () => {
  it('Integer N > 1, Integer M > 1, All Integers Small', () => {
    const ouput = solution(10, 4);
    expect(ouput).toEqual(5);
  });
});
