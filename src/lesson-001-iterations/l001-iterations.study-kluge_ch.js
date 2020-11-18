/*
function factorial(n) {
  let result = 0;
  for (i = 0; i < n; i++) {
    result = result + n * i;
  }
  console.log(result);
}

factorial(4);

*/
/*
function factorial(n) {
  let result = 0;
  if (n <= 1) result = 1;
  for (i = 0; i < n; i++) {
    result += n * i;
  }
  return result;
}

console.log(factorial(4));
*/
/*
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
*/
/*
function factorial(n, m = 1) {
  if (n <= 1) return m;
  else return factorial(n - 1, n * m);
}
*/

function factorial(n, m = 1) {
  if (n == 0) return m;
  else return factorial(n - 1, n * m);
} 
console.log(factorial(0));
