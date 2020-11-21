import solution = require('./l017t02.number-solitaire.solution');

describe('minAbsSum test', () => {
  it('test Small Array, Pos. + Neg. Values Ouccure ', () => {
    const output = solution([1, -2, 0, 9, -1, -2]);
    expect(output).toEqual(8);
  });
});
