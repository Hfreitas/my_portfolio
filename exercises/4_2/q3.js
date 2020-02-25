function makeMirrorTriangle(number) {
  for (let i = 1; i <= number; i++) {
    let output = '';

    for (let j = 1; j <= number - i; j++) {
      output += ' ';
    }

    for (let k = 1; k <= i; k++) {
      output += '*';
    }

    console.log(output);
  }
}

makeMirrorTriangle(5);
