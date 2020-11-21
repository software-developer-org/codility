import solution = require('./l091t01.tasks-from-indeed-prime-challenge-2016.dwarfs-rafting.solution');

describe('dwarfsRafting test', () => {
  it("testing solution(N = 4, S = '1B 1C 4B 1D 2A', T = '3B 2D', return 6", () => {
    const output = solution(4, '1B 1C 4B 1D 2A', '3B 2D');
    expect(output).toEqual(6);
  });
});
