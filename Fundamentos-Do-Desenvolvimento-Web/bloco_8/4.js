const gradeCalculator = (template, answers, func) => {
  const grade = func(template,answers);
  return grade;
}

const hitsCounter = (template, answers) => {
  let grade = 0;
  for (let i in answers) {
    if (answers[i] === template[i]) grade += 1;
    else grade -= 0.5;
  }
  return grade;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(gradeCalculator(rightAnswers, studentAnswers, hitsCounter));