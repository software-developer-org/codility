import solution = require('./l004t01.counting-elements.frog-river-one.solution');

describe('frogRiver test', () => {
  it('test Array > 1, Crossing Possible', () => {
    const x = 5;
    const a = [1, 3, 1, 4, 2, 3, 5, 4];
    // expected result = A[6] = 6
    expect(solution(x, a)).toEqual(6);
  });
});
