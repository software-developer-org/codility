import solution = require('./l013t01.fibonacci-numbers.fib-frog.solution');

describe('fibFrog test', () => {
  it('test Non Empty Array, Both Possible Values Occure', () => {
    const output = solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]);
    expect(output).toEqual(3);
  });
});
