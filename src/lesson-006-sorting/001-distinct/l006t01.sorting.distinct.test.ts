import solution = require('./l006t01.sorting.distinct.solution');

describe('distinct test', () => {
  it('test Array Not Empty, Only Positive Values, Different Values', () => {
    const output = solution([2, 1, 2, 2, 3, 1]);
    // distinct values = 1, 2, 3
    // expected result = 3
    expect(output).toEqual(3);
  });
});
