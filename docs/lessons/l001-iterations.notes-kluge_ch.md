# Lesson 001

Codility:

- [Iterations](https://app.codility.com/programmers/lessons/1-iterations/)
- [Open Reading Material.PDF](docs/lessons/l001-iterations.pdf)
- eleoquent java TODO

## For Loop

Definition:

> A for loop **repeats until a specified condition evaluates to false.**

- for details:
  - [mozilla-developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
  - [The Modern Javascript](https://javascript.info/while-for#the-for-loop)

```javascript
> for ([initialExpression]; [conditionExpression]; [incrementExpression])
> { statement }
```

1. `initial expression`

- initializes one or more loop counters, expression can also declare variables

2. `conditionExpression`

- value _true_ -> loop statements execute
- value _false_ -> loop terminates

3. `statement` (the body)

- single / multiple statements executed
- block statements `{ .... }` used for grouping

4. `increment expression`

- executed (if present) on each iteration

5. control returns to step 2

**example:**

```javascript
for (let i = 0; i < 3; i++) {
  alert(i);
}

// run begin
let i = 0;
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// ...finish, because now i == 3
```

## Using For Loop on Factorial Exercise

> In mathematics, the factorial of a positive integer n, denoted by n!, is the product of all positive integers, less than or equal to n:  
> **n! = n \* (n - 1) \* (n - 2) \* (n - 3) ...**

- [more details...](https://en.wikipedia.org/wiki/Factorial)

- searching the result for 4! (= factorial of 4)
- result: `4! = 1 * 2 * 3 * 4` is 24.

1. **For Loop Solutions**

```javascript
// as long as the loop counter (starting with 0) is less or equal than the passed factorial (4),
// multiply it with all its positive integers (represented by the loopcounter) starting with 0,
// keep the result, increment the loopcounter, go on, accumulate the result

// for loopcounter = 0
//    loopcounter <= factorial
//    result = result + (factorial * loopcounter)
```

implementing in javascript:

```javascript
function factorial(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += n * i;
  }
  return result;
}
```

using the mathmetical formula n! = n \* (n - 1) \* (n - 2) ...

```javascript
function factorial(n) {
  let result = 0;
  for (let i = 1; i < 4; i++) {
    // at end of loop it will be: 4 * 3 * 2 * 1
    result += n * (n - i);
  }
  return result;
}
```

What about 0! ?? The empty Product : [0! = 1](https://en.wikipedia.org/wiki/Empty_product)

Modifiying the solutions above with a condition:

```javascript
function factorial(n) {
  let result = 0;
  if (n <= 1) result = 1;
  for (i = 0; i < n; i++) {
    result += n * i;
  }
  return result;
}
```

2. **Recursive Solutions**

Definition _recursive_:

> The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function

- for details:
  - [Wikipedia](https://en.wikipedia.org/wiki/Recursion#In_computer_science)
  - [geeksfor geeks](https://www.geeksforgeeks.org/recursion/)

using recursive function for factorial exercise

```javascript
function factorial(n) {
  if (n <= 1) return 1;
  else return n * factorial(n - 1);
}
```

Definition _tail-recursive_:

> A recursive function is tail recursive when recursive call is the last thing executed by the function

- ## for details:

> The above recursive function can be written as a tail recursive function. The idea is to use one more argument and accumulate the factorial value in second argument(= m). When n reaches 1, return the accumulated value.

```javascript
function factorial(n, m = 1) {
  if (n <= 1) return m;
  else return factorial(n - 1, n * m);
}
```

Exercise: Building a Triangle

```javascript
// given n = 4 lines
// line 1 print '* '
// line 2 print '* ''* '
// line 3 print '* ''* ''* '
// line 4 print '* ''* ''* ''* '
```

using a foor loop:

```javascript
function triangle(rows, str = '') {
  for (let i = 0; i < rows; i++) console.log(`${(str += '* ')}`);
}

triangle(4);

*
* *
* * *
* * * *
```
