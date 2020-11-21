import solution = require('./l099t03.future-training.polyg-concavity-index.solution');

describe('polygonConcavityTest', () => {
  it('testing if solution(A), returns -1', () => {
    const output = solution([
      { x: -1, y: 3 },
      { x: 1, y: 2 },
      { x: 3, y: 1 },
      { x: 0, y: -1 },
      { x: -2, y: 1 },
    ]);
    expect(output).toEqual(-1);
  });

  it('testing if solution(A), returns 2 || 6', () => {
    const output = solution([
      { x: -1, y: 3 },
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 3, y: 1 },
      { x: 0, y: -1 },
      { x: -2, y: 1 },
      { x: -1, y: 2 },
    ]);
    let result;
    expect(output).toEqual(result == 2 ? 2 : 6);
  });
});
