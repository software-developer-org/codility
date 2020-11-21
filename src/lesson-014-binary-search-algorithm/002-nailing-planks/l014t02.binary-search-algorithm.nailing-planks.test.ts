import solution = require('./l014t02.binary-search-algorithm.nailing-planks.solution');

describe('nailingPlanks test', () => {
  it('test Array A > 1, Array B > 1, Array C > 1', () => {
    const ouput = solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]);
    expect(ouput).toEqual(4);
  });
});
