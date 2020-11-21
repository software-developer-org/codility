import solution = require('./l090t02.tasks-from-indeed-prime-challenge-2015.longest-password.solution');

describe('longestPassword test', () => {
  it('test Multiple Valid And Multiple Invalid Words, Spaces > 0, Non-Alphanumerical Chars', () => {
    const output = solution('test 5 a0A pass007 ?xy1');
    expect(output).toEqual(7);
  });
});
