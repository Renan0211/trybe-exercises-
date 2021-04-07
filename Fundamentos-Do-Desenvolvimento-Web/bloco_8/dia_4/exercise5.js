
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((counter, name1) => {
    let aCounter = 0;
    for (let i in name1) {
      if (name1[i] === 'A' || name1[i] === 'a') aCounter += 1;
    }
    return counter + aCounter;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);