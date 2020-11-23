import solution = require('./l099t05.future-training.tree-height.solution');

class Tree {
  constructor(x, l, r) {
    this.x = x;
    this.l = l;
    this.r = r;
  }

  x = 0;
  l = Tree;
  r = Tree;
}

describe('treeHeight test', () => {
  it('test solution', () => {
    const output = solution({
      x: 0,
      l: Tree,
      r: Tree,
    });
    expect(output).toEqual();
  });
});
