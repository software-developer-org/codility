import solution = require('./l008t02.leader.equi-leader.solution');

describe('equiLeader test', () => {
  it('test Array > 1, Only Positive Values', () => {
    const output = solution([4, 3, 4, 4, 4, 2]);
    // 2 leaders  : in 0  (4) - (3, 4, 4, 4, 2)
    // 2 leaders  : in 2  (4, 3, 4) - (4, 4, 2)
    expect(output).toEqual(2);
  });
});
