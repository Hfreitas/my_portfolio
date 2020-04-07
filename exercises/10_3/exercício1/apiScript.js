//Create page element
const jokeContainer = document.getElementById('jokeContainer');

const API_URL = 'https://icanhazdadjoke.com/';
const myObject = { method: 'GET', headers: { Accept: 'application/json' } };

const fetchJoke = () =>
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerHTML = data.joke;
    })
    .then((data) => console.log(data))
    .catch('Meu Deus!Socorro! Eu não quero morrer!');

window.onload = () => fetchJoke();
