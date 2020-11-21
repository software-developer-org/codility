import solution = require('./l091t03.tasks-from-indeed-prime-challenge-2016.rectangle-build-area.solution');

describe('rectangleGreaterBuildArea test', () => {
  it('testing solution(A = [1, 2, 5, 1, 1, 2, 3, 5, 1], X = 5), returns 2', () => {
    const output = solution([1, 2, 5, 1, 1, 2, 3, 5, 1], 5);
    expect(output).toEqual(2);
  });
});
