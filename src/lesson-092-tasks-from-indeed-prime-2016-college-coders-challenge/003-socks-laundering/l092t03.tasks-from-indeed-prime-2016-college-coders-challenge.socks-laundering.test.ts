import solution = require('./l092t03.tasks-from-indeed-prime-2016-college-coders-challenge.socks-laundering.solution');

describe('socksLaundering test', () => {
  it('testing if solution(K = 2, C = [1, 2, 1, 1], D = [1, 4, 3, 2, 4]), returns 3', () => {
    const output = solution(2, [1, 2, 1, 1], [1, 4, 3, 2, 4]);
    expect(output).toEqual(3);
  });
});
