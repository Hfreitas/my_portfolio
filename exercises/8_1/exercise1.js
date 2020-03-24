// Crie uma função que receba um número e retorne seu fatorial
const assert = require('assert');

// const factorial = (num) => (num < 2) ? 1 : num * factorial(num-1);


const factorial = num => {
  if (num === 0 || num === 1) return 1;

  let result = num;
  for (let i = num - 1; i >= 1; i--) {
    result *= i;
  }
  return result;
};

assert.strictEqual(factorial(4), 24);
assert.strictEqual(factorial(3), 6);
assert.strictEqual(factorial(2), 2);
assert.strictEqual(factorial(1), 1);
assert.strictEqual(factorial(0), 1);