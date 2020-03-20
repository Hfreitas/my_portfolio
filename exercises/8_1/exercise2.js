/* Crie uma função que receba uma frase e retorne qual a maior palavra.

1. Tenho contar o número de letras em cada palavra da frase;
2. Tenho que comparar esse número de letras e achar o maior;
3. Imprimir a maior palavra da frase;

Metódos:
1. .split*/

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


const LONGEST_WORD = str => {
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

console.log(LONGEST_WORD('Eu sou um desenvolvedor !'));