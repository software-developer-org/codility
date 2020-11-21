import solution = require('./l010t03.prime-and-composite-numbers.min-perimeter-rectangle.solution');

describe('minPerimeterRectangle test', () => {
  it('test Small Input-Area, Few Divisors ', () => {
    const output = solution(30);
    expect(solution(output)).toEqual(22);
  });
});
