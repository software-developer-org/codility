/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   S: 'xyz',
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     S: 'racecar,
 *   },
 *   { // test input 2
 *     S: 'x',
 *   }
 * ]
 */
const testData = [];

import solution = require('./l099t04.future-training.str-symmetry-point.solution');

describe('strSymmetryPoint test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });

  it("testing if solution(S = 'racing'), returns -1", () => {
    const S = 'racing';
    const output = solution(S);
    expect(output).toEqual(-1);
  });

  it("testing if solution(S = 'racecar'), returns 3", () => {
    const S = 'racecar';
    const output = solution(S);
    expect(output).toEqual(3);
  });

  it("testing if solution(S = 'x'), returns 0", () => {
    const S = 'x';
    const output = solution(S);
    expect(output).toEqual(0);
  });
});
