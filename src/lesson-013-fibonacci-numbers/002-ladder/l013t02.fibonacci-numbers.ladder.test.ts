/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [x1, x2],
 *   B: [x3, x4],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [ [1, 2],
 *     B: [5, 8] ],
 *   },
 *   { // test input 2
 *     A: [ [5, 1001],
 *     B: [8, 25] ],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l013t02.fibonacci-numbers.ladder.solution');

describe('ladder test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
});
