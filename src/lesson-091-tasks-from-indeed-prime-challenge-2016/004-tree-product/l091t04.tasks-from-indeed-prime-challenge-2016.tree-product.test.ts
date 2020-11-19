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
 *     B: [5, 6] ],
 *   },
 *   { // test input 2
 *     A: [ [5, 10],
 *     B: [8, 9] ],
 *   }
 * ]
 */
const testData = [];

import solution = require('./l091t04.tasks-from-indeed-prime-challenge-2016.tree-product.solution');

describe('treeProduct test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });

  it("testing solution(A = [0, 1, 1, 3, 3, 6, 7], B = [1, 2, 3, 4, 5, 3, 5]), returns '18'", () => {
    const A = [0, 1, 1, 3, 3, 6, 7];
    const B = [1, 2, 3, 4, 5, 3, 5];
    const output = solution(A, B);
    expect(output).toEqual('18');
  });

  it("testing solution(A = [0, 1], B = [1, 2]), returns '3'", () => {
    const A = [0, 1];
    const B = [1, 2];
    const output = solution(A, B);
    expect(output).toEqual('3');
  });
});
