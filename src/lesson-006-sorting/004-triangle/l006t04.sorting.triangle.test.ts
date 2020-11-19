import solution = require('./l006t04.sorting.triangle.solution');

describe('triangle test', () => {
  it('test Array > 0, Only Positive Values, Triangular Occures', () => {
    const output = solution([10, 2, 5, 1, 8, 20]);
    // triplet (0, 2, 4) is triangular
    // result = 1
    expect(output).toEqual(1);
  });
  it('test Array > 0, Only Positive Values, No Triangular Occures', () => {
    const output = solution([10, 2, 5, 1, 8, 20]);
    // no triplet is triangular
    // result = 0
    expect(output).toEqual(1);
  });
});
