import solution = require('./l005t01.prefix-sums.count-divisible.solution');

describe('countDivisible test', () => {
  it('test All Integers Samll and in Range > 0, Divisor > 1', () => {
    const a = 6;
    const b = 11;
    const k = 2;
    // 6, 8, 10 divisible by 2
    // result = 3
    expect(solution(a, b, k)).toEqual(3);
  });
});
