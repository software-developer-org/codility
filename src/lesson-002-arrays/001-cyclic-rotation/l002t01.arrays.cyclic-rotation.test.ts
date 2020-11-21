import solution = require('./l002t01.arrays.cyclic-rotation.solution');

describe('rotation test', () => {
  it('test Array Length < Times of Rotation ', () => {
    const output = solution([3, 8, 9, 7, 6], 3);
    // expected output [9, 7, 6, 3, 8]
    expect(output).toEqual([9, 7, 6, 3, 8]);
  });
  it('test Array Length = Times of Rotation ', () => {
    const output = solution([1, 2, 3, 4], 4);
    // expected output [1, 2, 3, 4]
    expect(output).toEqual([1, 2, 3, 4]);
  });
  it('test Same Values & Array Length < Times of Rotation ', () => {
    const output = solution([0, 0, 0], 1);
    // expected output [0, 0, 0]
    expect(output).toEqual([0, 0, 0]);
  });
});
