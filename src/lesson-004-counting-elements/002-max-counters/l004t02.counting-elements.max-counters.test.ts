import solution = require('./l004t02.counting-elements.max-counters.solution');

describe('maxCounters test', () => {
  it('test Small Integers', () => {
    const n = 5;
    const a = [3, 4, 4, 6, 1, 4, 4];
    // expected result = [3, 2, 2, 4, 2]
    expect(solution(n, a)).toEqual([3, 2, 2, 4, 2]);
  });
});
