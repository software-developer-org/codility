import solution = require('./l091t04.tasks-from-indeed-prime-challenge-2016.tree-product.solution');

describe('treeProduct test', () => {
  it("testing solution(A = [0, 1, 1, 3, 3, 6, 7], B = [1, 2, 3, 4, 5, 3, 5]), returns '18'", () => {
    const output = solution([0, 1, 1, 3, 3, 6, 7], [1, 2, 3, 4, 5, 3, 5]);
    expect(output).toEqual('18');
  });

  it("testing solution(A = [0, 1], B = [1, 2]), returns '3'", () => {
    const output = solution([0, 1], [1, 2]);
    expect(output).toEqual('3');
  });
});
