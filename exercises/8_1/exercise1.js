// Crie uma função que receba um número e retorne seu fatorial

let factorial = (num) => {
  num === 0 || num === 1 ? factorial = 1 : num = 0
  for( let i = num - 1; i>=1; i--) {
num *= i;
  }
  return factorial;
};

console.log(factorial(5))