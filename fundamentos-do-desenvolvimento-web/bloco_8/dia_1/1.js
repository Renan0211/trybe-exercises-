const newEmployees = () => {
  const employees = {
    id1: createEmployee('Pedro Guerra'),
    id2: createEmployee('Luiza Drumond'),
    id3: createEmployee('Carla Paiva'),
  }
  return employees;
};

const createEmployee = (employee) => {
  const obj = {
    nome: employee,
    email: `${employee.replace(' ', '_')}@trybe.com`
  };
  return obj;
}

console.log(newEmployees());