const checkAnswer = correctAnswer => userAnswer => {
  correctAnswer2 = correctAnswer.toLowerCase();
  userAnswer2 = userAnswer.toLowerCase();
  return correctAnswer2 === userAnswer2;
}

console.log(checkAnswer('sim')('SiM'));