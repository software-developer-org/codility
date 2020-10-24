/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   N: x1,
 *   S: 'abc',
 *   T: 'xyz',
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     N: 1,
 *     S: '1B 1C',
 *     T: '3B 2D',
 *   },
 *   { // test input 2
 *     N: 3,
 *     S: '1A 1D 2B 3D',
 *     T: '3B 2D',
 *    }
 * ]
 */
const testData = [];

import solution = require('./dwarfs-rafting.solution');

describe('dwarfsRafting test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2]);
      console.log('Result:', output);
    });
  });
});
