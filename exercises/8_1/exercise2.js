// Crie uma função que receba uma frase e retorne qual a maior palavra.

const assert = require('assert');

/*function countWordsLength(str) {
  const arrayOfString = str.split(' ');
  let characterCount = 0;
  let longestWord = '';
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length > characterCount) {
      characterCount = arrayOfString[i].length;
      longestWord = arrayOfString[i];
    }
  }
  return longestWord;
}*/

const longestWord = str => {
  const arrayOfString = str.split(' ');
  let characterCount = 0;
  let longestWord = '';
  for (let i = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length > characterCount) {
      characterCount = arrayOfString[i].length;
      longestWord = arrayOfString[i];
    }
  }
  return longestWord;
};

const param = 'Eu sou um desenvolvedor'

assert.strictEqual(longestWord(param), 'desenvolvedor');
