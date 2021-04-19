
const newPromise = new Promise((resolve, reject) => {
  let arr = [];
  for (let i = 0; i < 10; i += 1) {
    const randomNumber = Math.ceil(Math.random() * 50);
    arr.push(randomNumber);
  }
  arr = arr.map(num => num ** 2)
  const arrSum = arr.reduce((counter, num) => counter + num, 0);
  if (arrSum < 8000) {
    return resolve(arrSum);
  }
  reject(arrSum);
}).then(arrSum => [arrSum / 2, arrSum / 3, arrSum / 5, arrSum / 10]).then(arr => arr.reduce((acc, curr) => acc + curr)).then(sum => console.log(sum)).catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))

