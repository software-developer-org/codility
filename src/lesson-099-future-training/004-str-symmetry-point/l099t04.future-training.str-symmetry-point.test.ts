import solution = require('./l099t04.future-training.str-symmetry-point.solution');

describe('strSymmetryPoint test', () => {
  it("testing if solution(S = 'racing'), returns -1", () => {
    const output = solution('racing');
    expect(output).toEqual(-1);
  });

  it("testing if solution(S = 'racecar'), returns 3", () => {
    const output = solution('racecar');
    expect(output).toEqual(3);
  });

  it("testing if solution(S = 'x'), returns 0", () => {
    const output = solution('x');
    expect(output).toEqual(0);
  });
});
