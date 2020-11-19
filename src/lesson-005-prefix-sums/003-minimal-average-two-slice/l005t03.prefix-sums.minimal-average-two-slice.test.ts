import solution = require('./l005t03.prefix-sums.minimal-average-two-slice.solution');

describe('minAvgTwoSlice test', () => {
  it('test Short Array, All Integers > 0', () => {
    const output = solution([4, 2, 2, 5, 1, 5, 8]);
    // slice with minimal average sum at A[1]
    // result = 1
    expect(output).toEqual(1);
  });
});
