/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   N: [x1], [x2],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     N: [1], [2],
    },
 *   { // test input 2
 *     N: [5], [1001],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l010t03.prime-and-composite-numbers.min-perimeter-rectangle.solution');

describe('minPerimeterRectangle test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
