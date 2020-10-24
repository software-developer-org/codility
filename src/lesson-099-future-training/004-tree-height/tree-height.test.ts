/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   T: TODO
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     T: 5, [3, [20, none, none], [21, none, none]], [10, [1, none, none], none]
 *   },
 *   { // test input 2
 *     A: [5, 1001],
 *     K: 8,
 *   }
 * ]
 */
const testData = [];

import solution = require('./tree-height.solution');

describe('treeHeight test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
