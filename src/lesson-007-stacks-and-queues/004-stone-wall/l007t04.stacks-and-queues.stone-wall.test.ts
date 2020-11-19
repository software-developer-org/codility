import solution = require('./l007t04.stacks-and-queues.stone-wall.solution');

describe('stoneWall test', () => {
  it('test Short Array, Small Values', () => {
    const output = solution([8, 8, 5, 7, 9, 8, 7, 4, 8]);
    expect(output).toEqual(7);
  });
});
