import solution = require('./l007t03.stacks-and-queues.nesting.solution');

describe('nesting test', () => {
  it('test String Nested', () => {
    const output = solution('(()(())())');
    expect(output).toEqual(1);
  });
  it('test String Not Nested', () => {
    const output = solution('())');
    expect(output).toEqual(0);
  });
});
