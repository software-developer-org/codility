import solution = require('./l015t03.caterpillar-method.count-triangles.solution');

describe('countTriangles test', () => {
  it('test Non Empty Array, Values Unique, Small Values', () => {
    const output = solution([10, 2, 5, 1, 8, 12]);
    expect(output).toEqual(4);
  });
});
