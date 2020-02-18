function makeLine(length) {
  let line = '*';
  for (let j = 1; j <= length; j += 1) {
    line += ' ';
  }
  return line + '\n';
}

function buildTriangle(height) {
  let column = '*';
  for (let i = 1; i <= height; i += 1) {
    column += makeLine(i);
  }
  return column;
}

console.log(buildTriangle(5));
