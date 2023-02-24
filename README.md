# Quadratic Equation Solver

## Description 

This is a simple console application for solving quadratic equations. It has 2 modes:

1. In the interactive mode user can consecutively write the coefficients in the console.

### To start interactive mode:
```
$ node index.js
```

### Interactive mode output example:

```
a = 2
b =  3
c = 1
Equation is:  (2)x^2 + (3)x + (1) = 0
There are 2 roots
x1 = -0.50
x2 = -1.00
```

2. In the non-interactive mode application accepts path to the file with the coefficients.

### To start non-interactive mode:
```
$ node index.js /filepath
```

### Non-interactive mode output example:

```
Equation is:  (2)x^2 + (3)x + (1) = 0
There are 2 roots
x1 = -0.50
x2 = -1.00
```
## Wrong formats

### Interactive mode

In interactive mode application will not accept anything but a real single number (white spaces around are acceptable).

```
a = 0
Error. a cannot be 0
a = 1
b =  clown
Error. Expected a valid real number, got clown instead
b = 0xblablabla
Error. Expected a valid real number, got 0xblablabla instead
b = 2    3
Error. Expected a valid real number, got 2    3 instead
```
### Non-interactive mode

Non-interactive mode expands interactive mode rules (the coefficients must be real single numbers), and the provided file must match a concrete format: 

```
[number][space][number][space][number]
```
### These are not acceptable records in the file:
```
[space]2 3 1
```
```
2 3 1[space]
```
```
2 3 1 1
```
```
2 3 1
[another line]
```

# Link on Revert Commit

[Revert readme changing](https://github.com/crazysparrow69/lab1_software-methodology/commit/ae41fee4f734d1f284bfa429c37861bcbdc3c96d)
