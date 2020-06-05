# Random Number Generator

Adds a .NET style `Random` object to JavaScript that allows for quick random number generation with the same functionality seen in .NET. 

## Usage

This package is available as an NPM package and can be installed from the CLI using the following command

```bash
npm i gcoulby-random.js
```



## Differences from .NET implementation

1. This implementation uses floats instead of doubles as by default JavaScript floats have 64bit floating point precision.
2. NextDouble() equivalent is therefore nextFloat()
3. This implementation also supports `min` and `max` values for floats



## Methods & Overloads

| Method                  | Action                                                       |
| ----------------------- | ------------------------------------------------------------ |
| next()                  | Returns a non-negative random integer.                       |
| next(int)               | Returns a non-negative random integer that is less than the specified maximum. |
| next(int, int)          | Returns a random integer that is within a specified range.   |
| nextFloat()             | Returns a non-negative random floating-point number.         |
| nextFloat(float)        | Returns a non-negative random floating-point number that is less than the specified maximum. |
| nextFloat(float, float) | Returns a random float-point number that is within a specified range. |
| sample()                | Returns a random floating-point number between 0.0 and 1.0.  |

