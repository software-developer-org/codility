import solution = require('./l015t04.caterpillar-method.min-abs-sum-of-two.solution');

describe('minAbsSumOfTwo test', () => {
  it('test Array > 1, Few Possible Pairings = 6, All Values Small, Pos. + Neg. Values', () => {
    const output = solution([1, 4, -3]);
    expect(output).toEqual(1);
  });
  it('test Array > 1, Few Possible Pairings = 10, All Values Small, Pos. + Neg. Values', () => {
    const output = solution([-8, 4, 5, -10, 3]);
    expect(output).toEqual(3);
  });
});
