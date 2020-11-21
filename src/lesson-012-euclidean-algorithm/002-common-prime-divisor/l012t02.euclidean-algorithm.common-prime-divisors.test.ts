import solution = require('./l012t02.euclidean-algorithm.common-prime-divisors.solution');

describe('commonPrimeDivisor test', () => {
  it('test Array A > 1, Array B > 1, Only One Possible Pairing', () => {
    const output = solution([15, 10, 3], [75, 30, 5]);
    expect(output).toEqual(1);
  });
});
