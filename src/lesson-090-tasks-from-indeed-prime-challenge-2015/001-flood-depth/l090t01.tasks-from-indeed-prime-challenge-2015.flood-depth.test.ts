import solution = require('./l090t01.tasks-from-indeed-prime-challenge-2015.flood-depth.solution');

describe('floodDepth test', () => {
  it('test Small Array > 1, Only Small Values < 10, Land Can Hold Water ', () => {
    const output = solution([1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2]);
    expect(output).toEqual(2);
  });
  it('test Array Length = 2, Small Values, Land Can Not Hold Water', () => {
    const output = solution([5, 8]);
    // result should return 0;
    expect(output).toEqual(0);
  });
});
