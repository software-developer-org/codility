import solution = require('./l007t02.stacks-and-queues.fish.solution');

describe('fish test', () => {
  it('test A: Only Small Integers > 0, B: 1 Fish in Other Direction', () => {
    const output = solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]);
    // except fish 0 and 4, everybody dies
    expect(output).toEqual(2);
  });
});
