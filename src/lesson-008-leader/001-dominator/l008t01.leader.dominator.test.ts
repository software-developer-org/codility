import solution = require('./l008t01.leader.dominator.solution');

describe('dominator test', () => {
  it('test Non Empty Array, Has Dominator = 3, Pos.+ Neg. Values', () => {
    const output = solution([3, 4, 3, 2, 3, -1, 3, 3]);
    // result may be = 0, 2, 4, 6, 7
    expect(output).toEqual(0);
  });
});
