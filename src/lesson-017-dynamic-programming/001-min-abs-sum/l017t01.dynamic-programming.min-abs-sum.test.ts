import solution = require('./l017t01.dynamic-programming.min-abs-sum.solution');

describe('minAbsSum test', () => {
  it('test Array > 0, Few Possible Sequences for Result', () => {
    // computed the minimum possible value of a given array A of N integers
    const output = solution([1, 5, 2, -2]);
    // expected output should be 0
    expect(output).toEqual(0);
  });
});
