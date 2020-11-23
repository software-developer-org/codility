import solution = require('./l099t01.future-training.array-inversion-count.solution');

describe('arrayInversionCount test', () => {
  it('testing if solution(A = [-1, 6, 3, 4, 7, 4]), returns 4', () => {
    const output = solution([-1, 6, 3, 4, 7, 4]);
    expect(output).toEqual(4);
  });
});
