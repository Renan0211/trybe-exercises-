const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  const fetch = require('node-fetch');

  const getRepos = (url) => {
    return fetch(url)
      .then(response => response.json())
      .then((data) => {
        return data.map((repo) => repo.name);
      });
  };

  const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const animalObj = Animals.find(animal => animal.name === name);
        if (animalObj) return resolve(animalObj);
        return reject('Nenhum animal com esse nome!');
      }, 100);
    })
  )

  const getAnimal = (name) => {
    return findAnimalByName(name).then(animal => animal);
  };

  const findAnimalByAge = age => {
    const animalsWithThisAge = Animals.filter(animal => animal.age === age);
    if (animalsWithThisAge.length > 0) return animalsWithThisAge;
    return 'Nenhum animal com essa idade!';
  }

  module.exports = {
    uppercase,
    findUserById,
    getUserName,
    getRepos,
    fetch,
    Animals,
    findAnimalByName,
    getAnimal,
    findAnimalByAge
  }