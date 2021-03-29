const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (arr) => {
  let returnArr = [];
  for (let i =0; i < arr.length; i += 1) {
    returnArr.push(arr[i].length);
  }
  return returnArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);