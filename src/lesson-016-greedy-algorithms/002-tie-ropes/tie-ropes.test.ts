/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   K: k,
 *   A: [x1, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     K: 2,
 *     A: [5, 4],
 *   },
 *   { // test input 2
 *     K: 5,
 *     A: [8, 7, 4, 2],
 *   }
 * ]
 */
const testData = [];

import solution = require('./tie-ropes.solution');

describe('tieRopes test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
});
