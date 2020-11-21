import solution = require('./l005t01.prefix-sums.count-divisible.solution');

describe('countDivisible test', () => {
  it('test All Integers Samll and in Range > 0, Divisor > 1', () => {
    const output = solution(6, 11, 2);
    // 6, 8, 10 divisible by 2
    // result = 3
    expect(output).toEqual(3);
  });
});
