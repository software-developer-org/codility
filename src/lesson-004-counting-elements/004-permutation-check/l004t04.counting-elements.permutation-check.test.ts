import solution = require('./l004t04.counting-elements.permutation-check.solution');

describe('iteration test', () => {
  it('test Short Array, Unordered, Small Integers, Is Permutation', () => {
    const output = solution([4, 1, 3, 2]);
    // expected result = 1
    expect(output).toEqual(1);
  });
  it('test Short Array, Unordered, Small Integers, No Permutation', () => {
    const output = solution([4, 1, 3]);
    // expected result = 0
    expect(output).toEqual(0);
  });
});
