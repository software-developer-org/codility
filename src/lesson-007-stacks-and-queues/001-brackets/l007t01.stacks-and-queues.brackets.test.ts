import solution = require('./l007t01.stacks-and-queues.brackets.solution');

describe('brackets test', () => {
  it('test String Properly Nested', () => {
    const output = solution('{[()()]}');
    expect(output).toEqual(1);
  });
  it('test String Not Nested', () => {
    const output = solution('([)()]');
    expect(output).toEqual(0);
  });
});
