import solution = require('./l011t02.sieve-of-eratosthenes.count-semiprimes.solution');

describe('countSemiprimes test', () => {
  it('test Arrays P > 1, Array Q > 1, N > 1', () => {
    const ouput = solution([26, [1, 4, 16], [26, 10, 20]]);
    expect(ouput).toEqual([10, 4, 0]);
  });
});
