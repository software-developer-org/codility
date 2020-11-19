import solution = require('./l003t02.time-complexity.permutation-missing-element.solution');

describe('permMissElement test', () => {
  it('test Value Range 1 - 5, Missing Value in Middle of Array', () => {
    const output = solution([2, 3, 1, 5]);
    // expected result = 4
    expect(output).toEqual(4);
  });
});
