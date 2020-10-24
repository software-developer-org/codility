/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   X: [x1, x2],
 *   V: [x3, x4],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     X: [ [1, 2],
 *     Y: [5, 6] ],
 *   },
 *   { // test input 2
 *     X: [5, 10],
 *     Y: [8, 12] ],
 *   }
 * ]
 */
const testData = [];

import solution = require('./diamond-count.solution');

describe('diamondCount test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
});
