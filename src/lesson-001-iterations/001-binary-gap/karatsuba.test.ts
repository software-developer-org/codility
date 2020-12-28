describe('Karatsuba', () => {
  const multiply = function (a: string, b: string) {
    const splitLengthA = Math.round(a.length / 2);
    const splitLengthB = Math.round(b.length / 2);

    const x1 = parseInt(a.slice(0, splitLengthA));
    const x0 = parseInt(a.slice(splitLengthA));

    const y1 = parseInt(b.slice(0, splitLengthB));
    const y0 = parseInt(b.slice(splitLengthB));

    const z2 = x1 * y1;
    const z0 = x0 * y0;
    const z1 = (x1 + x0) * (y1 + y0) - z2 - z0;

    const result = z2 * Math.pow(10, a.length) + z1 * Math.pow(10, splitLengthA) + z0;

    console.log(`${x1}|${x0} x  ${y1}|${y0}
z2= ${z2} (${x1}x${y1}), z0= ${z0} (${x0}x${y0}), z1=${z1}
result = ${result + ''} = ${z2}*10^${a.length} + ${z1}*10^${splitLengthA} + ${z0}`);
  };

  it('5678 x 1234', () => {
    multiply('5678', '1234');
  });

  it('1234 x 5678', () => {
    multiply('1234', '5678');
  });

  it('3141592653589793238462643383279502884197169399375105820974944592 x 2718281828459045235360287471352662497757247093699959574966967627', () => {
    multiply(
      '3141592653589793238462643383279502884197169399375105820974944592',
      '2718281828459045235360287471352662497757247093699959574966967627'
    );
  });
});
