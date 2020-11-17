// Printing all the numbers from 0 - 99 with a for-loop

for (let i = 0; i < 100; i++) {
  //console.log(i);
}

// Factoriel

/**
 * n! = (n - 1) * (n - 2) * (n - 3)
 * if n = 4 -> (n - 1) = 3, (n - 2) = 2, (n - 3) = 1
 * so we have result = 4 * 3 * 2 * 1
 *
 */

// Find factorial with for-loop
function findFactorial(n) {
  // Check if input is 0 or 1, so factorial wouldn't have any sense
  if (n == 0 || n == 1) return 1;
  // Iterate through the numbers from input down to the number 1
  for (let i = n - 1; i >= 1; i--) {
    // Calculate factorial
    n *= i;
  }
  return n;
}

// Second variant with for-loop
function findFactorialSecondVariant(inputNumber) {
  var total = 1;

  for (i = 0; i < inputNumber; i++) {
    total = total * (inputNumber - i);
  }
  return total;
}

module.exports = { findFactorial, findFactorialSecondVariant };
