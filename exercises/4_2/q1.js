function makeSquare(num) {
  let output = '';
  for (let j = 1; j <= num; j++) {
    for (let i = 1; i <= num; i++) {
      output += ' * ';
    }
    output += '\n';
  }
  console.log(output);
}

makeSquare(5);
