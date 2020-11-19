import solution = require('./l006t03.sorting.number-of-disc-intersections.solution');

describe('numberOfDiscsIntersection test', () => {
  it('test Small Integers', () => {
    const output = solution([1, 5, 2, 1, 4, 0]);
    // intersecting pairs < 10.000.000
    expect(output).toEqual(11);
  });
});
