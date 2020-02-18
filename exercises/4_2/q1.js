function makeRetangle(length) {
    let line = ' ';
    for (let i = 1, i =< length; i+= 1) {
        for (let j = 1, i =< length; j+=1) {
          line += '*';
        }
        return line + '\n'
    }
}


console.log(makeRetangle(5))