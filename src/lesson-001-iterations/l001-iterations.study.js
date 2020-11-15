const triangle1ForLoop = (n) => {
  for (let x = 0; x < n; x++) {
    const asterisks = new String('*').repeat(x + 1);
    console.log(asterisks);
  }
};

console.log('triangle1ForLoop(2)');
triangle1ForLoop(2);

console.log('triangle1ForLoop(4)');
triangle1ForLoop(4);

// NOTE: this is a one-liner :)!
const triangle1Functional = (n) =>
  new Array(n).fill('').forEach((_, index) => console.log(new String('*').repeat(index + 1)));

console.log('triangle1Functional(2)');
triangle1Functional(2);

console.log('triangle1Functional(4)');
triangle1Functional(4);

const triangle2ForLoop = (n) => {
  for (let x = 0; x < n; x++) {
    // prefix and suffix
    const spaces = x === 0 ? '' : new String(' ').repeat(x);
    const asterisks = new String('*').repeat(n * 2 - 1 - 2 * x);
    console.log(spaces + asterisks + spaces);
  }
};

console.log('triangle2ForLoop(2)');
triangle2ForLoop(2);

console.log('triangle2ForLoop(4)');
triangle2ForLoop(4);

// NOTE: this is a one-liner :)!
const triangle2Functional = (n) =>
  new Array(n).fill('').forEach((_, index) =>
    console.log(
      // prefix
      (index === 0 ? '' : new String(' ').repeat(index)) +
        // asterisks
        new String('*').repeat(n * 2 - 1 - 2 * index) +
        // suffix
        (index === 0 ? '' : new String(' ').repeat(index))
    )
  );

console.log('triangle2Functional(2)');
triangle2Functional(2);

console.log('triangle2Functional(4)');
triangle2Functional(4);

const pascalTriangle = (column, row) => {
  const colLength = row + 1;
  if (column === 0 || column === colLength - 1) {
    return 1;
  }
  return pascalTriangle(column - 1, row - 1) + pascalTriangle(column, row - 1);
};

console.log('pascalTriangle with 5 rows');
for (let row = 0; row < 5; row++) {
  const colLength = row + 1;
  let column = 'row ' + row + ': ';
  for (let col = 0; col < colLength; col++) {
    column += '(c' + col + 'r' + row + ')' + pascalTriangle(col, row) + ' ';
  }
  console.log(column);
}

const countDigitsUsingString = (n) => {
  return (n + '').length;
};

console.log('countDigitsUsingString(9):', countDigitsUsingString(9));
console.log('countDigitsUsingString(100100100):', countDigitsUsingString(100100100));

const countDigitsUsingPower = (n) => {
  let power = 1;
  while (power <= 308) {
    if (n === n % Math.pow(10, power)) {
      return power;
    }
    power += 1;
  }
};

console.log('countDigitsUsingPower(9):', countDigitsUsingPower(9));
console.log('countDigitsUsingPower(100100100):', countDigitsUsingPower(100100100));

// show Fibonacci numbers from 0 until n
const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  while (a <= n) {
    console.log(a);
    // next fibo numbers
    const c = a + b;
    // move values to the left
    a = b;
    b = c;
  }
};

console.log('fibonacci(144)', fibonacci(144));
