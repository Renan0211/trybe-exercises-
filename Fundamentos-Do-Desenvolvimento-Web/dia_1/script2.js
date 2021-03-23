const oddsAndEvens = numbersString => {
  return `Os númeors ${numbersString.sort((a,b) => a - b)} se encontram ordenados de forma crescente!`
}


console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));