import solution = require('./l003t01.time-complexity.frog-jump.solution');

describe('frogJump test', () => {
  it('test X = 10 > 1, D = 30 < Y = 85', () => {
    // more than one jump (D) needed, completed distance exceeds target position
    // 85 < (10 + 30 + 30 + 30)
    const x = 10;
    const y = 85;
    const d = 30;
    // expected result = 3
    expect(solution(x, y, d)).toEqual(3);
  });
});
