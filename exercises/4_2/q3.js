function makeMirrorTriangle(num) {
  let output = '';
  for (let j = 1; j <= num ; j++) {
    for (var k = 1; k <= j; k++) {
      if(k < num){
        output = ' ';
      }else {
        output = ' * ';
      }
    }
    output +='\n'
  }
  console.log(output)
}

makeMirrorTriangle(5);
