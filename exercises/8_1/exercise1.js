// Crie uma função que receba um número e retorne seu fatorial

/*const factorial = (num) => {
  num === 0 || num === 1 ? factorial = 1 : for( let i = num - 1; i>=1; i--) {
num *= i;
  }
  return factorial;
};*/

const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else {
    let result = num;
    for (let i = num - 1; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
};

console.log(factorial(5));
