import solution = require('./l002t02.arrays.odd-occurrences-in-array.solution');

describe('oddOccurrences test', () => {
  it('test Single Value Occuring', () => {
    // elements occure 2/4-times(even), one element 1-time(uneven)
    const output = solution([9, 3, 9, 3, 9, 7, 9]);
    // expected result = 7
    expect(output).toEqual(7);
  });
});
