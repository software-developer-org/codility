import solution = require('./l002t01.arrays.cyclic-rotation.solution');

describe('rotation test', () => {
  it('test Array Length < Times of Rotation ', () => {
    const a = [3, 8, 9, 7, 6];
    const k = 3;
    // expected output [9, 7, 6, 3, 8]
    expect(solution(a, k)).toEqual([9, 7, 6, 3, 8]);
  });
  it('test Array Length = Times of Rotation ', () => {
    const a = [1, 2, 3, 4];
    const k = 4;
    // expected output [1, 2, 3, 4]
    expect(solution(a, k)).toEqual([1, 2, 3, 4]);
  });
  it('test Same Values & Array Length < Times of Rotation ', () => {
    const a = [0, 0, 0];
    const k = 1;
    // expected output [0, 0, 0]
    expect(solution(a, k)).toEqual([0, 0, 0]);
  });
});
