/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   S: '   ',
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     S: 'xyz 012 zt',
 *   },
 *   { // test input 2
 *     S: '?abc 234mt lpo',
 *   }
 * ]
 */
const testData = [];

import solution = require('./l090t02.tasks-from-indeed-prime-challenge-2015.longest-password.solution');

describe('longestPassword test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet);
      console.log('Result:', output);
    });
  });

  it("testing if solution(S = 'test 5 a0A pass007 ?xy1' return 7", () => {
    const S = 'test 5 a0A pass007 ?xy1';
    const output = solution(S);
    expect(output).toEqual(7);
  });

  it("testing if solution(S = 'test' return -1", () => {
    const S = 'test';
    const output = solution(S);
    expect(output).toEqual(-1);
  });
});
