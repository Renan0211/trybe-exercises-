const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let greetingPeople = [];

  for (let person in people) {
    greetingPeople.push(greeting + people[person]);
  }
  return greetingPeople;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);