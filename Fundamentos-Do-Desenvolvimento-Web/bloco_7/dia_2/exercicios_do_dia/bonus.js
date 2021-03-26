const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (obj, key, value) => obj[key] = value;

addNewKey(lesson2, 'turno', 'manhã');

const listKeys = obj => Object.keys(obj);

const objSize = obj => Object.keys(obj).length;

const listValues = obj => Object.values(obj);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

// console.log(allLessons)

function sumOfStudents (obj) {
  const allValues = listValues(obj);
  let studentCounter = 0;
  for (i in allValues) {
    studentCounter += allValues[i].numeroEstudantes;
  }
  return studentCounter;
}

const getValueByNumber = (obj, num) => Object.values(obj)[num];

const verifyPair = (obj, key, value) => {
   const allEntries = Object.entries(obj);
   let check = false;
   for(i in allEntries) {
     if (allEntries[i][0] === key && allEntries[i][1] === value) check = true;
   }
   return check;
};

function studentsPerSubject (obj) {
  const allValues = listValues(obj);
  let numberOfStudents = 0;
  for (i in allValues) {
    // console.log(allValues[i])
    if (verifyPair(allValues[i], 'materia', 'Matemática') === true) {
      const allValues = listValues(obj);
      // numberOfStudents += allValues[i].numeroEstudantes;
      console.log(allValues[i])
    }
  }
  return numberOfStudents;
}


console.log(studentsPerSubject(allLessons));