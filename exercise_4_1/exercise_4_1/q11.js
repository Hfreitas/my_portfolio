const salarioBruto = Math.random() * 100001;
let salarioBase = 0;
let salarioLiquido = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - [salarioBruto * 0.08];
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - [salarioBruto * 0.09];
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - [salarioBruto * 0.11];
} else if (salarioBruto >= 5189.92) {
  salarioBase = salarioBruto - 570.88;
} else {
  alert('ERROR');
}

if (salarioBase > 0 && salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - [salarioBase * 0, 075 - 142.8];
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - [salarioBase * 0, 15 - 354.8];
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - [salarioBase * 0.225 - 636.13];
} else if (salarioBase >= 4665.68) {
  salarioLiquido = salarioBase - [salarioBase * 0.275 - 869.36];g
} else {
  alert('ERROR');
}

console.log(
  'Se seu salário bruto é R$ ' +
    salarioBruto.toFixed(2) +
    ', então seu salário líquido será R$ ' +
    salarioLiquido.toFixed(2)
);
