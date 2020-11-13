/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   S: '  ',
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     S: '(()())',
 *   },
 *   { // test input 2
 *     S: '((())(()))',
 *   }
 * ]
 */
const testData = [];

import solution = require('./l007t03.stacks-and-queues.nesting.solution');

describe('nesting test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });
});
