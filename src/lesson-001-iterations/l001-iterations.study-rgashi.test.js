// eslint-disable-next-line @typescript-eslint/no-var-requires
const findFactorial = require('./l001-iterations.study-rgashi');
describe('Testing findFactorial()', () => {
  test('findFactorial(4) should return 24', () => {
    expect(findFactorial(4)).toEqual(24);
  });
});
