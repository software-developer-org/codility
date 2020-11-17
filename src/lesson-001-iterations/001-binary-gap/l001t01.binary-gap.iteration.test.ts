import solution = require('./l001t01.binary-gap.iteration.solution');

describe('iteration test', () => {
  // source: https://stackoverflow.com/a/10258846/3437868
  function binaryToNumber(binary: string) {
    return parseInt(binary, 2);
  }

  // -- examples from exercise
  it('test N=9', () => {
    // binary representation of 9: 1001
    const output = solution(9);
    // expected gap is 2
    expect(output).toEqual(2);
  });

  it('test N=529', () => {
    // binary representation: 1000010001
    const output = solution(529);
    // expected gap
    expect(output).toEqual(4);
  });

  it('test N=20', () => {
    // binary representation: 10100
    const output = solution(20);
    // expected gap
    expect(output).toEqual(1);
  });

  it('test N=15', () => {
    // binary representation: 1111
    const output = solution(15);
    // expected gap
    expect(output).toEqual(0);
  });

  it('test N=32', () => {
    // binary representation: 100000
    const output = solution(32);
    // expected gap
    expect(output).toEqual(0);
  });

  it('test N=1041', () => {
    // binary representation: 10000010001
    const output = solution(1041);
    // expected gap
    expect(output).toEqual(5);
  });

  // -- user-defined examples
  it('simple binary 1', () => {
    const output = solution(binaryToNumber('1'));
    // expected gap
    expect(output).toEqual(0);
  });

  it('simple binary 0', () => {
    const output = solution(binaryToNumber('0'));
    // expected gap
    expect(output).toEqual(0);
  });

  it('binary with trailing zero: 1110', () => {
    const output = solution(binaryToNumber('1110'));
    // expected gap
    expect(output).toEqual(0);
  });

  it('binary with trailing zero: 110100010010', () => {
    const output = solution(binaryToNumber('110100010010'));
    // expected gap
    expect(output).toEqual(3);
  });

  it('two binary gaps with same size: 1001001', () => {
    const output = solution(binaryToNumber('1001001'));
    // expected gap
    expect(output).toEqual(2);
  });

  it('binary with many 1s and increasing gaps: 11011100111100011111', () => {
    const output = solution(binaryToNumber('11011100111100011111'));
    // expected gap
    expect(output).toEqual(3);
  });

  it('binary with many 1s and decreasing gaps: 11000111001111011111', () => {
    const output = solution(binaryToNumber('11000111001111011111'));
    // expected gap
    expect(output).toEqual(3);
  });

  it('huge binary 111111111111111111111111111111111111111111111111111', () => {
    const output = solution(binaryToNumber('111111111111111111111111111111111111111111111111111'));
    // expected gap
    expect(output).toEqual(0);
  });
});
