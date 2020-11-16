# Chapter 1

## Iterations

## For Loops

[For Loop Wiki - reference](https://en.wikipedia.org/wiki/For_loop)

- In _computer science_, a **for-loop** is a **control flow statement** for specifying iteration, which allows code to be executed **repeatedly**.

- A for-loop has two parts:

  - a header, specifying the iteration
  - a body, which is executed once per iteration

- The header often declares an explicit **loop counter**, which allows the body to know which iteration is being executed.

- **For-loops** can be thought of as shorthands for **while-loops** which increment and test a loop variable.

- **For-loop** ilustration, from i = 0 to i = 2, resulting in data1 = 200:

![For-Loop](https://user-images.githubusercontent.com/44840806/99253273-c3882780-2810-11eb-8fc0-85a5b0dd5efe.png)

- Generally, for-loops are grouped in two categories:
  - **Traditional for-loops**

```javascript
for i = first to last do statement
(* or just *)
for i = first..last do statement
```

- **Iterator-based for-loops (Foreach)**

```Python
for item in some_iterable_object:
    do_something()
    do_something_else()
```
