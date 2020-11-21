import solution = require('./l015t01.caterpillar-method.abs-distinct.solution');

describe('absDistinct test', () => {
  it('test Array > 1, Has Non-Distinct Value, Pos. + Neg. Values Occure', () => {
    const output = solution([-5, -3, -1, 0, 3, 6]);
    expect(output).toEqual(5);
  });
});
