function returnGreatestNumberIndex(array) {
  let greatestNumberIndex = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[greatestNumberIndex]) {
      greatestNumberIndex = i;
    }
  }
  return greatestNumberIndex;
}

console.log(returnGreatestNumberIndex([2, 3, 6, 7, 10, 1]));
