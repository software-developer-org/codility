/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [x1, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2],
 *   },
 *   { // test input 2
 *     A: [5, 1001],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l013t01.fibonacci-numbers.fib-frog.solution');

describe('fibFrog test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
  it('test if fibFrog is 3', () => {
    const example = [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0];
    expect(solution(example)).toEqual(3);
  });
});
