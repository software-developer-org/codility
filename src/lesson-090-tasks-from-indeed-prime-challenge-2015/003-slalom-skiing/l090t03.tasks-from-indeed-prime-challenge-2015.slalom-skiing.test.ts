import solution = require('./l090t03.tasks-from-indeed-prime-challenge-2015.slalom-skiing.solution');

  it('test Small Values, Changing Times of Direction = 2', () => {
    const output = solution([15, 13, 5, 7, 4, 10, 12, 8, 2, 11, 6, 9, 3]);
    expect(output).toEqual(8);
  });

  it('test Very Small Array, Changing Times of Direstion = 0', () => {
    const output = solution([1, 5]);
    expect(output).toEqual(2);
  });
});
