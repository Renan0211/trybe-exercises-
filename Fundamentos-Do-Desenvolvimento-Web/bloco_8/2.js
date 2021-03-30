const checkNum = (luckyNum, randomNum) => {
  let feedback = luckyNum === randomNum ? true : false;
  return feedback;
};


const raffle = (num, func) => {
  const randomNum = Math.ceil(Math.random() * 5);
  const luck = func(num, randomNum) ? 'Parabéns!!! Você Ganhou!!!' : 'Tente novamente :('
  console.log(randomNum);
  return luck;
}

console.log(raffle(4, checkNum));
