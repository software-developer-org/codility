/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   A: [[x1, x2],[x3, x4], [x5, x6], [x7, x8], [x9, x10]],
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     A: [1, 2],[-1, 3], [2, 4], [0, -1], [-2, 1],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l099t03.future-training.polyg-concavity-index.solution');

class Point2D {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  x = 0;
  y = 0;
}

describe('polygonConcavityTest', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });

  it('testing if solution(A), returns -1', () => {
    const A = [
      { x: -1, y: 3 },
      { x: 1, y: 2 },
      { x: 3, y: 1 },
      { x: 0, y: -1 },
      { x: -2, y: 1 },
    ];
    const output = solution(A);
    expect(output).toEqual(-1);
  });

  it('testing if solution(A), returns 2 || 6', () => {
    const A = [
      { x: -1, y: 3 },
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 3, y: 1 },
      { x: 0, y: -1 },
      { x: -2, y: 1 },
      { x: -1, y: 2 },
    ];
    const output = solution(A);
    let result;
    expect(output).toEqual(result == 2 ? 2 : 6);
  });
});
