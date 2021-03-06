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
 *     B:   [3, 4] ],
 *   },
 *   { // test input 2
 *     A: [ [5, 11],
 *     B:   [7, 2] ],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l007t02.stacks-and-queues.fish.solution');

describe('fish test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });
});
