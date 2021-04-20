const assert = require('assert');

const removeVowels = (word) => {
 const wordSplited = word.split('');
 let vowelCounter = 0;
 for (let i in wordSplited) {
   if (wordSplited[i] === 'a'||wordSplited[i] ==='e'||wordSplited[i] ==='i'||wordSplited[i] ==='o'||wordSplited[i] ==='u') {
     vowelCounter += 1;
     wordSplited[i] = `${vowelCounter}`
   }
 }
 let result = '';
 for(let i in wordSplited) {
   result += wordSplited[i];
 }
 return result;
};


const parameter = 'Dayane';
const result = 'D1y2n3';
assert.deepStrictEqual(removeVowels(parameter), result);