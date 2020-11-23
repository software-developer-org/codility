import solution = require('./l091t02.tasks-from-indeed-prime-challenge-2016.hilbert-maze.solution');

describe('hilbertMaze test', () => {
  it('testing solution(N = 1, A = 2, B = 1, C = 3 and D = 4), returns 8', () => {
    const output = solution(1, 2, 1, 3, 4);
    expect(output).toEqual(8);
  });

  it('testing solution(N = 2, A = 2, B = 5, C = 6 and D = 6), returns 7', () => {
    const output = solution(2, 2, 5, 6, 6);
    expect(output).toEqual(7);
  });

  it('testing solution(N = 3, A = 6, B = 6, C = 10 and D = 13), returns 39', () => {
    const output = solution(3, 6, 6, 10, 13);
    expect(output).toEqual(39);
  });
});
