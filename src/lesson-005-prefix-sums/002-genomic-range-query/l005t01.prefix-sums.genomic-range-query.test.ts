import solution = require('./l005t02.prefix-sums.genomic-range-query.solution');

describe('genRngQuery test', () => {
  it('test All Nucleotides Occure, ', () => {
    const s = 'CAGCCTA ';
    const p = [2, 5, 0];
    const q = [4, 5, 6];
    // expected result = [2, 4, 1]
    expect(solution(s, p, q)).toEqual([2, 4, 1]);
  });
});
