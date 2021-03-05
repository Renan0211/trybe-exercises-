function largestWord(array) {
  let greatestWord = array[0];
  for (key in array) {
    if (array[key].length > greatestWord.length) {
      greatestWord = array[key];
    }
  }
  return greatestWord;
}

console.log(
  largestWord(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
