import solution = require('./l004t03.counting-elements.missing-integer.solution');

describe('missingInteger test', () => {
  it('test Small Array, Only Positve Integers, Each Unique', () => {
    const output = solution([1, 2, 3]);
    // expected result = 4
    expect(output).toEqual(4);
  });
  it('test Small Array, Only Negative Integers, Each Unique', () => {
    // no integer > 0
    const output = solution([-1, -3]);
    // expected result = 1
    expect(output).toEqual(1);
  });
  it('test Small Array, Only Positve Integers, Double Occurences', () => {
    const output = solution([1, 2, 3]);
    // expected result = 4
    expect(output).toEqual(4);
  });
});
