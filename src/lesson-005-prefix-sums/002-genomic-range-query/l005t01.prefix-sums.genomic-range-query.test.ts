/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   S: 'xyz',
 *   P: [x1, x2],
 *   Q: [x3, x4];
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     S: 'CAGTT',
 *     P: [2, 5 , 0],
 *     Q: [4, 5, 6],
 *   },
 *   { // test input 2
 *     S: 'CAGTTGGAT',
 *     P: [3, 0 , 6, 4],
 *     Q: [4, 5, 6, 1],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l005t02.prefix-sums.genomic-range-query.solution');

describe('genRngQuery test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2]);
      console.log('Result:', output);
    });
  });
});
