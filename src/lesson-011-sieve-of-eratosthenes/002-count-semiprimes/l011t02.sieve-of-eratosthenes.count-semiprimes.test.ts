/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   N: n,
 *   P: [x1, x2, x3],
 *   Q: [x4, x5, x6]
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     N: 4,
 *     P: [5, 10, 15],
 *     Q: [1, 2, 3],
 *   },
 *   { // test input 2
 *     N: 5,
 *     P: [8, 16, 32],
 *     Q: [2, 4, 8],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l011t02.sieve-of-eratosthenes.count-semiprimes.solution');

describe('countSemiprimes test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1], testSet[2]);
      console.log('Result:', output);
    });
  });
  it('test if countSemiprimes is [10,4,0]', () => {
    const example = [26, [1, 4, 16], [26, 10, 20]];
    expect(solution(example[0], example[1], example[2])).toEqual([10, 4, 0]);
  });
});
