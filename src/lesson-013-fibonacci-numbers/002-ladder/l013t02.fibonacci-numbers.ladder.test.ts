import solution = require('./l013t02.fibonacci-numbers.ladder.solution');

describe('ladder test', () => {
  it('test Array A > 1, Array B > 1', () => {
    const ouput = solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1]);
    expect(ouput).toEqual([5, 1, 8, 0, 1]);
  });
});
