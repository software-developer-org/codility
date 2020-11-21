import solution = require('./l009t03.maximum-slice-problem.max-slice-sum.solution');

describe('maxSliceSum test', () => {
  it('test Short Array > 1, Possible Slices > 1, Small Values', () => {
    const ouput = solution([3, 2, -6, 4, 0]);
    expect(ouput).toEqual(5);
  });
});
