import solution = require('./l092t04.tasks-from-indeed-prime-2016-college-coders-challenge.tennis-tournament.solution');

describe('tennisTournament test', () => {
  it('testing if solution(P = 5, C = 3), returns 2', () => {
    const output = solution(5, 3);
    expect(output).toEqual(2);
  });

  it('testing if solution(P = 10, C = 3), returns 3', () => {
    const output = solution(10, 3);
    expect(output).toEqual(3);
  });
});
