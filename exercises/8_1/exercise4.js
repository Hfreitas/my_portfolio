const assert = require('assert');

// Crie um código JavaScript com a seguinte especificação:

// Não se esqueça de usar template literals

// Função 1: Escreva uma função que vai receber uma string como primeiro parâmetro. Sua função deverá procurar pela letra x e substituir pela string que você passou como primeiro parâmetro. Sua função deve retornar essa nova string.

// Exemplo da string:

// “Tryber x aqui!

// Tudo bem?“.

const buildPhrase = string => `Tryber ${string} aqui!

Tudo bem?`;

// Um array com escopo global, que é o escopo do arquivo JS nesse caso, contendo cinco strings com suas principais skills.

const skills = ['JavaScript', 'HTML', 'CSS'];

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

// Exemplo:

// “Tryber x aqui!

// Tudo bem?

// Minhas cinco principais habilidades são:

// JavaScript;
// HTML; …
// #goTrybe”.


// Minhas cinco principais habilidades são:

// - JavaScript;
// - HTML;
// - CSS;
// #goTrybe`;

const buildSkillsList = () => {
return skills.sort().map((skill) => `- ${skill},\n;`);
};

const buildSkillsPhrase = buildPhrase => {
return `${buildPhrase}

Minhas cinco principais habilidades são:

${buildSkillsList()}
#goTrybe`
};

// tests buildPhrase
const text = `Tryber FOO aqui!

Tudo bem?`;

assert.deepStrictEqual(buildPhrase('FOO'), text);

// tests buildSkillsPhrase
const testString = `${text}

Minhas cinco principais habilidades são:

- CSS;
- HTML;
- Javascript;
#goTrybe`;

assert.strictEqual(buildSkillsPhrase(text), testString);

//vericar código retorno incorreto.