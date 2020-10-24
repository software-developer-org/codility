/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   S: '   ',
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     S: 'xyz 012 zt',
 *   },
 *   { // test input 2
 *     S: '?abc 234mt lpo',
 *   }
 * ]
 */
const testData = [];

import solution = require('./longest-password.solution');

describe('longestPassword test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
