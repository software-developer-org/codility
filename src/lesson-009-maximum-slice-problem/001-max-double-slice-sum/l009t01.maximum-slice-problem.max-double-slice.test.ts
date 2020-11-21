import solution = require('./l009t01.maximum-slice-problem.max-double-slice.solution');

describe('maxDoubleSliceSum test', () => {
  it('test Possible Slices > 0, Each Value != 0', () => {
    const output = solution([3, 2, 6, -1, 4, 5, -1, 2]);
    expect(output).toEqual(17);
  });
});
