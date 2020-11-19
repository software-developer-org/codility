import solution = require('./l006t02.sorting.max-product-three.solution');

describe('maxProductOfThree test', () => {
  it('test Few Triplets', () => {
    const output = solution([-3, 1, 2, -2, 5, 6]);
    // maximal product given with A[2] * A[4] * A[5] = 60
    // expected rsult = [2, 4, 5]
    expect(output).toEqual([2, 4, 5]);
  });
});
