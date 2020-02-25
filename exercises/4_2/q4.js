function makePyramid(num) {
  for (let i = 1; i <= num; i++) {
    let output = '';
    for (let j = i; j <= num - 1; j++) {
      output += ' ';
    }
    for (var k = 1; k <= i; k++) {
      output += ' * ';
    }
    console.log(output);
  }
}

makePyramid(5);
