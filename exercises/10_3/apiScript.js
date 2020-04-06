//Create page element
const jokeContainer = document.getElementById('jokeContainer');
let jokeList = document.createElement('ul');
jokeContainer.appendChild(jokeList);

const API_URL = 'https://icanhazdadjoke.com/';
const myObject = { method: 'GET', headers: { Accept: 'application/json' } };

const fetchJoke = () =>
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((data) => (joke) => {
      const joker = document.createElement('li');
      joker.innerHTML = `${joke}`;
      jokeList.appendChild(joke);
    });

window.onload = () => fetchJoke();
