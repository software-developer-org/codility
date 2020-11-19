/**
 * An array where each element is the input for the solution function. Syntax:
 *
 * [ testset1, testset2, ..., testsetN]
 *
 * Where test set is:
 *
 * {
 *   P: p,
 *   C: c,
 * }
 *
 * Example:
 *
 * [
 *   { // test input 1
 *     P: 1,
 *     C: 5,
 *   },
 *   { // test input 2
 *     P: 5,
 *     C: 8,
 *   }
 * ]
 */
const testData = [];

import solution = require('./l092t04.tasks-from-indeed-prime-2016-college-coders-challenge.tennis-tournament.solution');

describe('tennisTournament test', () => {
  it('test solution', () => {
    testData.forEach((testSet) => {
      console.log('Input:', testSet);
      const output = solution(testSet[0], testSet[1]);
      console.log('Result:', output);
    });
  });

  it('testing if solution(P = 5, C = 3), returns 2', () => {
    const P = 5;
    const C = 3;
    const output = solution(P, C);
    expect(output).toEqual(2);
  });

  it('testing if solution(P = 10, C = 3), returns 3', () => {
    const P = 10;
    const C = 3;
    const output = solution(P, C);
    expect(output).toEqual(3);
  });
});
