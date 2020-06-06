# Random Number Generator

Adds a .NET style `Random` object to JavaScript that allows for quick random number generation with the same functionality seen in .NET. 

## Usage

This package is available as an NPM package and can be installed from the CLI using the following command

```bash
npm i gcoulby-random.js
```



After installing the package, specify the package requirement:

```javascript
const Random = require("gcoulby-random.js");
```



Examples:

```javascript
// Get a Random integer between 0 and MAX_SAFE_INTEGER
Random.int();

// Return a non-negative random integer that is less than the specified maximum.
Random.intBelow(max = 12);

// Returns a random integer that is within a specified range.
Random.intBetween(min = 10, max = 20);

// Get a Random floating-point number between 0 and MAX_SAFE_INTEGER
Random.float();

// Return a non-negative random floating-point number that is less than the specified maximum.
Random.floatBelow(max = 12);

// Return a random floating-point number that is within a specified range.
Random.floatBetween(min = 10, max = 20);

// Return a random floating-point number between 0.0 and 1.0.
Random.sample();


console.log(rand.int());
console.log(rand.intBelow(10));
console.log(rand.intBetween(10, 20));

console.log(rand.float());
console.log(rand.floatBelow(10));
console.log(rand.floatBetween(10, 20));

```



## Differences from .NET implementation

1. This implementation uses floats instead of doubles as by default JavaScript floats have 64bit floating point precision.
2. NextDouble() equivalent is therefore nextFloat()
3. This implementation also supports `min` and `max` values for floats
4. No overloads since Javascript does not support them



## Methods & Overloads

| Method                  | Action                                                       |
| ----------------------- | ------------------------------------------------------------ |
| int()                  | Returns a non-negative random integer.                       |
| intBelow(max)               | Returns a non-negative random integer that is less than the specified maximum. |
| intBetween(min, max)          | Returns a random integer that is within a specified range.   |
| float()             | Returns a non-negative random floating-point number.         |
| floatBelow(max)        | Returns a non-negative random floating-point number that is less than the specified maximum. |
| floatBetween(min, max) | Returns a random float-point number that is within a specified range. |
| sample()                | Returns a random floating-point number between 0.0 and 1.0.  |

