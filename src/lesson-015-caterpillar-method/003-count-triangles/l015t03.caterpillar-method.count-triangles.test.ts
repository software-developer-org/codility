/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [x1, x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2],
 *   },
 *   { // test input 2
 *     A: [5, 1001],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l015t03.caterpillar-method.count-triangles.solution');

describe('countTriangles test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0]);
      console.log('Result:', output);
    });
  });
  it('test if countTriangles is 4', () => {
    const example = [10, 2, 5, 1, 8, 12];
    expect(solution(example)).toEqual(4);
  });
});
