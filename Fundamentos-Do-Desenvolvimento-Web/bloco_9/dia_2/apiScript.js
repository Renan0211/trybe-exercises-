// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json()).then(jsonObject => {
      const jokeContainer = document.getElementById('jokeContainer');
      jokeContainer.innerText = jsonObject.joke
    });
};

window.onload = () => fetchJoke();