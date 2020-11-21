import solution = require('./l011t01.sieve-of-eratosthenes.count-non-divisible.solution');

describe('countNonDivisible test', () => {
  it('test Array > 1, Possible Divisors > 1, Only Small Values', () => {
    const output = solution([3, 1, 2, 3, 6]);
    expect(output).toEqual([2, 4, 3, 2, 0]);
  });
});
