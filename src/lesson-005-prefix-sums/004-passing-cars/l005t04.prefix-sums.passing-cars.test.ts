import solution = require('./l005t04.prefix-sums.passing-cars.solution');

describe('passCars test', () => {
  it('test Cars Travell in Both Directions', () => {
    const output = solution([0, 1, 0, 1, 1]);
    // possible matches (0, 1), (0, 3), (0, 4), (2, 3), (2, 4)
    // possible matches < 1 Billion
    // epected result = 5
    expect(output).toEqual(5);
  });
});
