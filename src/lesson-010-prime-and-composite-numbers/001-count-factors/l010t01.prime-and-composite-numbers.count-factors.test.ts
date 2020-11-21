import solution = require('./l010t01.prime-and-composite-numbers.count-factors.solution');

describe('countFactors test', () => {
  it('test Small Value, Divisors > 2, Few Divisors', () => {
    const outout = solution(24);
    expect(outout).toEqual(8);
  });
});
