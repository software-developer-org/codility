import solution = require('./l005t02.prefix-sums.genomic-range-query.solution');

describe('genRngQuery test', () => {
  it('test All Nucleotides Occure, ', () => {
    const output = solution('CAGCCTA ', [2, 5, 0], [4, 5, 6]);
    // expected result = [2, 4, 1]
    expect(output).toEqual([2, 4, 1]);
  });
});
