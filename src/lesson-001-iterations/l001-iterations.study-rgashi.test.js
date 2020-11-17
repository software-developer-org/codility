// eslint-disable-next-line @typescript-eslint/no-var-requires
const { findFactorial, findFactorialSecondVariant } = require('./l001-iterations.study-rgashi');
describe('Testing findFactorial()', () => {
  test('findFactorial(4) should return 24', () => {
    expect(findFactorial(4)).toEqual(24);
  });

  test('findFactorialSecondVariant(4) should return 24', () => {
    expect(findFactorialSecondVariant(4)).toEqual(24);
  });
});
