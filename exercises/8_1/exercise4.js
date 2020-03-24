/* Crie um código JavaScript com a seguinte especificação:

Não se esqueça de usar template literals

Função 1: Escreva uma função que vai receber uma string como primeiro parâmetro. Sua função deverá procurar pela letra x e substituir pela string que você passou como primeiro parâmetro. Sua função deve retornar essa nova string.

Exemplo da string:

“Tryber x aqui!

Tudo bem?“.

Um array com escopo global, que é o escopo do arquivo JS nesse caso, contendo cinco strings com suas principais skills.

Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

Exemplo:

“Tryber x aqui!

Tudo bem?

Minhas cinco principais habilidades são:

JavaScript;
HTML; …
#goTrybe”.*/
const assert = require('assert');

const buildPhrase = string => `Tryber ${string} aqui!

Tudo bem?

Minhas cinco principais habilidades são:

- JavaScript;
- HTML;
- CSS;
#goTrybe`;

const skills = ['JavaScript', 'HTML', 'CSS'];

const text = `Tryber FOO aqui!

Tudo bem?`;

const buildSkillsPhrase = skillsString => {
  let fullText =  `Tryber x aqui!

  Tudo bem?

  Minhas cinco principais habilidades são:

  -${buildSkillsList(skills)} #goTrybe`;
};

const buildSkillsList = skills => {
  let list = '';
  skills.sort();
  for(let i = 0; i<skills.length; i++) {
    list += `- ${skills}; \n`;
  }
  return list;
}

// tests buildPhrase
assert.strictEqual(buildPhrase('FOO'), text);

// tests buildSkillsPhrase
assert.strictEqual(buildSkillsPhrase(skillsString));

//vericar código com Nobre