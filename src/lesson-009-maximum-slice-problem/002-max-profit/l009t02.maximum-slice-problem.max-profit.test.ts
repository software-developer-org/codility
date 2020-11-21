import solution = require('./l009t02.maximum-slice-prolbem.max-profit.solution');

describe('maxProfit test', () => {
  it('test Array > 0, Values > 0, Values Distinct', () => {
    const ouput = solution([23171, 21011, 21123, 21366, 21013, 21367]);
    expect(ouput).toEqual(356);
  });
});
