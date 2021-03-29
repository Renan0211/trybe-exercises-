const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notStrictEqual(myRemove([1, 2, 3, 4]), [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 5)
const testsList = [1, 2, 3, 4];

myRemove(testsList, 2);

assert.deepStrictEqual(testsList, [1, 2, 3, 4]);


