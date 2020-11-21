import solution = require('./l092t02.tasks-from-indeed-prime-2016-college-coders-challenge.diamond-count.solution');

describe('diamondCount test', () => {
  it('testing if solution(X = [1, 1, 2, 2, 2, 3, 3], Y = [3, 4, 1, 3, 5, 3, 4]), returns 2', () => {
    const output = solution([1, 1, 2, 2, 2, 3, 3], [3, 4, 1, 3, 5, 3, 4]);
    expect(output).toEqual(2);
  });

  it('testing if solution(X = [1, 2, 3, 3, 2, 1], Y = [1, 1, 1, 2, 2, 2]), returns 0', () => {
    const output = solution([1, 2, 3, 3, 2, 1], [1, 1, 1, 2, 2, 2]);
    expect(output).toEqual(0);
  });
});
