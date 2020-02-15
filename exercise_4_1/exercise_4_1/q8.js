let num1 = Math.floor(Math.random() * 1001);
let num2 = Math.floor(Math.random() * 1001);
let num3 = Math.floor(Math.random() * 1001);

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(num1, num2, num3, 'true');
} else {
  console.log(num1, num2, num3, 'false');
}
