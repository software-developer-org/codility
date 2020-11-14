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
