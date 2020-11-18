/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   N: [x1],
 *   M: [x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     N: [ [1],
 *     M: [5] ],
 *   },
 *   { // test input 2
 *     N: [ [59],
 *     M: [89] ],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l012t01.euclidean-algorithm.chocolates-by-numbers.solution');

describe('chocolatesByNumbers test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
  it('test if chocolatesByNumbers is 5', () => {
    const example = [10, 4];
    expect(solution(example[0], example[1])).toEqual(5);
  });
});
