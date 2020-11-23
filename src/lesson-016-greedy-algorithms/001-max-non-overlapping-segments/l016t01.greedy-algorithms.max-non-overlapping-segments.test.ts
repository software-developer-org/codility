import solution = require('./l016t01.greedy-algorithms.max-non-overlapping-segments.solution');

describe('maxNonoverlappingSegments test', () => {
  it('test Array A > 0, Array B > 0, All Values Small AND > 0', () => {
    // non-overlapping set of segments from arrays
    // A = [1, 3, 7, 9, 9] and B = [5, 6, 8, 9, 10]
    const output = solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]);
    // expected result should be 3
    expect(output).toEqual(3);
  });
});
