import solution = require('./l001t01.binary-gap.iteration.solution');

describe('iteration test', () => {
  it('test N = 9 ', () => {
    // binary => 1001
    const output = solution(9);
    // expected gap = 2
    expect(output).toEqual(2);
  });
  it('test N = 529 ', () => {
    // binary => 1000010001
    const output = solution(529);
    // expected gap = 4
    expect(output).toEqual(4);
  });
  it('test N = 20 ', () => {
    // binary => 10100
    const output = solution(20);
    // expected gap = 1
    expect(output).toEqual(1);
  });
  it('test N = 15 ', () => {
    // binary => 1111
    const output = solution(15);
    // expected gap = 0
    expect(output).toEqual(0);
  });
  it('test N = 32 ', () => {
    // binary => 1000000
    const output = solution(32);
    // expected gap = 0
    expect(output).toEqual(0);
  });
  it('test N = 1041 ', () => {
    // binary => 10000010001
    const output = solution(9);
    // expected gap = 5
    expect(output).toEqual(5);
  });
});
