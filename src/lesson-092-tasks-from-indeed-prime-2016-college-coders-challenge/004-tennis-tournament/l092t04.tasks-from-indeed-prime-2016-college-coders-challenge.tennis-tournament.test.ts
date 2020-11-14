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
});
