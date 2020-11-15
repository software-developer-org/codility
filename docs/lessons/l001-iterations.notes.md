# Lesson 1 - Iterations

Codility:

- [Iterations](https://app.codility.com/programmers/lessons/1-iterations/)
- [Open Reading Material.PDF](docs/lessons/l001-iterations.pdf)

# For loops

## Factorial exercise

Read factorial on [Wikipedia](https://en.wikipedia.org/wiki/Factorial).

Factorial implementation pseudo code:

Logical solution expressed in pseudo code:

```javascript
factorial(n) {
    // example for !4 (factorial of 4) where n = 4
    // GOAL: 1 * 2 * 3 * 4
    // Since we start with n, we can also say 4 *3 * 2* 1
    // formalized it looks like this: n * (n - 1) * (n - 2) * ... * 1
}
```

Recursive implementation:

```javascript
factorial(n) {
    // example for !4, n=4: 4*3*2*1*1
    if (n > 1) then
        return n * factorial(n - 1)
    else
        return 1
}
```

Problem of above solution: this allows only factory for N >= 1. What about !0? The value of 0! is 1, according to the convention for an [empty product](https://en.wikipedia.org/wiki/Empty_product).

So the solution should be:

```javascript
factorial(n) {
    // example for !4, n=4: 4*3*2*1*1
    if (n >= 1) then
        return n * factorial(n - 1)
    else // case for n=0, for !0: 1
        return 1
}
```

This is what we call a recursion.

## Recursion and Tail Recursion

From [StackOverflow - What is tail recursion?](https://stackoverflow.com/a/33930/3437868):

> In traditional recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the recursive call and calculate the result. In this manner, you don't get the result of your calculation until you have returned from every recursive call.
> <br><br>
> In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results of your current step to the next recursive step. This results in the last statement being in the form of (return (recursive-function params)). Basically, the return value of any given recursive step is the same as the return value of the next recursive call.
> <br><br>
> The consequence of this is that once you are ready to perform your next recursive step, you don't need the current stack frame any more. This allows for some optimization. In fact, with an appropriately written compiler, you should never have a stack overflow snicker with a tail recursive call. Simply reuse the current stack frame for the next recursive step. I'm pretty sure Lisp does this.

From [Wikipedia - Recursion](<https://en.wikipedia.org/wiki/Recursion_(computer_science)>):

> In computer science, recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.[1] Such problems can generally be solved by iteration, but this needs to identify and index the smaller instances at programming time. Recursion solves such recursive problems by using functions that call themselves from within their own code. The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science.

From [Wikipedia - Tail call](https://en.wikipedia.org/wiki/Tail_call):

> In computer science, a tail call is a subroutine call performed as the final action of a procedure.[1] If the target of a tail is the same subroutine, the subroutine is said to be tail-recursive, which is a special case of direct recursion. Tail recursion (or tail-end recursion) is particularly useful, and often easy to handle in implementations.

Very good [Scala example](https://www.scala-exercises.org/scala_tutorial/tail_recursion) for greatest common divisor (gcd, tail recursion) and factorial (recursion):

> Here's an implementation of gcd using Euclid's algorithm.

```
def gcd(a: Int, b: Int): Int =
  if (b == 0) a else gcd(b, a % b)
```

> gcd(14, 21) is evaluated as follows:

```
gcd(14, 21)
if (21 == 0) 14 else gcd(21, 14 % 21)
if (false) 14 else gcd(21, 14 % 21)
gcd(21, 14 % 21)
gcd(21, 14)
if (14 == 0) 21 else gcd(14, 21 % 14)
if (false) 21 else gcd(14, 21 % 14)
gcd(14, 7)
gcd(7, 14 % 7)
gcd(7, 0)
if (0 == 0) 7 else gcd(0, 7 % 0)
if (true) 7 else gcd(0, 7 % 0)
7
```

Now, consider factorial:

```
def factorial(n: Int): Int =
if (n == 0) 1 else n \* factorial(n - 1)
```

factorial(4) is evaluated as follows:

```
factorial(4)
if (4 == 0) 1 else 4 _ factorial(4 - 1)
4 _ factorial(3)
4 _ (3 _ factorial(2))
4 _ (3 _ (2 _ factorial(1)))
4 _ (3 _ (2 _ (1 _ factorial(0)))
4 _ (3 _ (2 _ (1 \* 1)))
24
```

## Triangles

Example: Let’s print a triangle made of asterisks (‘\*’) separated by spaces. The triangle
should consist of n rows, where n is a given positive integer, and consecutive rows should
contain 1, 2, . . . , n asterisks. For example, for n = 4 the triangle should appear as follows:

```
*
* *
* * *
* * * *
```

Pseudo code:

```
triangle(n) {
    // express above example in logical wording:
    // using n=4
    // print 1 asterisk in row 0
    // print 2 asterisk in row 1
    // print 3 asterisk in row 2
    // print 4 asterisk in row 3

    // formalize above logical solution:
    // start from row = 0 until row = n -1
    // for each row: number of asterisks = row + 1
    // for each row: print number of asterisks

    // try to formulate above logical solution:
    starting from x = 0 until x = n-1
        print asterisks (x + 1) times
}
```

Example: Let’s print a triangle made of asterisks (‘\*’) separated by spaces and consisting
of n rows again, but this time upside down, and make it symmetrical. Consecutive rows should
contain 2n − 1, 2n − 3, . . . , 3, 1 asterisks and should be indented by 0, 2, 4, . . . , 2(n − 1)
spaces. For example, for n = 4 the triangle should appear as follows:

```
* * * * * * *
  * * * * *
    * * *
      *
```

Pseudo code using figurative language

```
// highlight spaces with 's'
* * * * * * *
s * * * * * s
s s * * * s s
s s s * s s s

// describe asterisks, spaces at start (prefix) and end (suffix) per row
row 0: prefix with 0 spaces, 7 asterisks, suffix with 0 spaces
row 1: prefix with 1 spaces, 5 asterisks, suffix with 1 spaces
row 2: prefix with 2 spaces, 3 asterisks, suffix with 2 spaces
row 3: prefix with 3 spaces, 1 asterisks, suffix with 3 spaces

// formalized:
starting from row = 0 until row = n - 1
  prefix and suffix = row;
  asterisks = (n * 2) - 1 - (2* row)

```

### Pascal's Triangle

simply said: inside the triangle, each value is the sum of the two numbers above:

```
row 0:    1
row 1:   1 1
row 2:  1 2 1
row 3: 1 3 3 1
row 4:1 4 6 4 1
```

[Wikipedia](https://en.wikipedia.org/wiki/Pascal%27s_triangle)

Exercise: https://j2eedev.org/pascal-triangle-scala/

```javascript
// exammple for r0, c0 => 1 and for r4, c1 => 4
pascalTriangle(column: number, row: number) {

}
```

prepare and describe row and col positions:

```
row 0: (c0r0 = 1)
row 1: (c0r1 = 1), (c0r1 = 1)
row 2: (c0r2 = 1), (c1r2 = 2), (c2r2 = 1)
row 3: (c0r3 = 1), (c1r3 = 3), (c2r3 = 3), (c3r3 = 1)
row 4: (c0r4 = 1), (c1r4 = 4), (c2r4 = 6), (c3r4 = 4), (c4r4 = 1)
```

formalized:

```
// calling this function means e.g. give me the value for row and column
pascalTriangle(column: number, row: number) {
  colLength = row + 1;
  if start (column = 0) or end (column = colLength - 1) return 1;
  return the sum of above previous values: pascalTriangle(column -1, row - 1) + pascalTriangle(column, row - 1);
}
```

Triangle solution:

```bash
node src/lesson-001-iterations/l001-iterations.study.js
```

# While loops

```

```

```

```

```

```

```

```
