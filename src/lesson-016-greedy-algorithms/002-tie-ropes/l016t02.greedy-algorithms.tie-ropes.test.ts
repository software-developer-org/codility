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

import solution = require('./l016t02.greedy-algorithms.tie-ropes.solution');

describe('tieRopes test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });

  it('testing solution(K, A), should return 3', () => {
    // maximum numbers of tied ropes of length greater than or equal to a given integer K = 4 from array A = [1, 2, 3, 4, 1, 1, 3]
    const K = 4;
    const A = [1, 2, 3, 4, 1, 1, 3];
    const result = 3;
    // expected result should be 3
    expect(solution(K, A)).toEqual(result);
  });
});
