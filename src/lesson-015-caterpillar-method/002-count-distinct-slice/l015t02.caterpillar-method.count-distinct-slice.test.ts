import solution = require('./l015t02.caterpillar-method.count-distinct-slice.solution');

describe('countDistinctSlices test', () => {
  it('test Small Integer M, M > 0, Small Array > 1', () => {
    const output = solution(6, [3, 4, 5, 5, 2]);
    expect(output).toEqual(9);
  });
});
