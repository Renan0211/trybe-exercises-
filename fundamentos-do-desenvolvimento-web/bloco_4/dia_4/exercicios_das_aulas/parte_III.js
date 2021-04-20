function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function module(a, b) {
  return a % b;
}

function greaterOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function greaterOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else {
    console.log("Dois ou mais número possuem o mesmo valor");
  }
}

function triangleCheck(a, b, c) {
  isItTriangle = false;
  if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
    isItTriangle = true;
  }

  return isItTriangle;
}

function pieceOfChess(nameOfThePiece) {
  switch (nameOfThePiece.toLowerCase()) {
    case "peão":
      console.log("anda pra a frente e captura nas diagonais a frente");
      break;
    case "cavalo":
      console.log("em padrões de L de duas por três casas");
      break;
    case "bispo":
      console.log("em diagonais");
      break;
    case "torre":
      console.log("em linhas e colunas");
      break;
    case "rainha":
      console.log("em linhas e colunas e diagonais");
      break;
    case "rei":
      console.log("em linhas e colunas porém somente uma casa");
      break;
    default:
      console.log("peça inexistente");
  }
}

function gradeCalculator(grade) {
  if (grade >= 90 && grade < 100) {
    console.log("A");
  } else if (grade >= 80 && grade < 90) {
    console.log("B");
  } else if (grade >= 70 && grade < 80) {
    console.log("C");
  } else if (grade >= 60 && grade < 70) {
    console.log("D");
  } else if (grade >= 50 && grade < 60) {
    console.log("E");
  } else if (grade < 50 && grade >= 0) {
    console.log("F");
  } else {
    console.log("Valor inválido");
  }
}

function isThereAnEven(a, b, c) {
  let result = false;

  if ((a % 2) + (b % 2) + (c % 2) < 3) {
    result = true;
  }
  return result;
}

function isThereAnOdd(a, b, c) {
  let result = false;

  if ((a % 2) + (b % 2) + (c % 2) > 0) {
    result = true;
  }
  return result;
}

function profit(valorCusto, valorVenda) {
  let impostoSobreOCusto = 20 / 100;
  let valorCustoTotal = valorCusto + valorCusto * impostoSobreOCusto;
  let lucro = valorVenda - valorCustoTotal;
  return lucro;
}

function netSalaryCalculator(salarioBruto) {
  let inss;
  let ir;

  if (salarioBruto <= 1556.94) {
    inss = salarioBruto * (8 / 100);
  } else if (salarioBruto > 1556.94 && salarioBruto < 2594.93) {
    inss = (9 / 100) * salarioBruto;
  } else if (salarioBruto > 2594.92 && salarioBruto < 5189.83) {
    inss = salarioBruto * (11 / 100);
  } else {
    inss = 570.88;
  }

  let salarioBrutoMenosInss = salarioBruto - inss;

  if (salarioBrutoMenosInss <= 1903.98) {
    ir = 0;
  } else if (
    salarioBrutoMenosInss > 1903.98 &&
    salarioBrutoMenosInss < 2826.66
  ) {
    ir = salarioBrutoMenosInss * (7.5 / 100) - 142.8;
  } else if (
    salarioBrutoMenosInss > 2826.65 &&
    salarioBrutoMenosInss < 3751.06
  ) {
    ir = salarioBrutoMenosInss * (15 / 100) - 354.8;
  } else if (
    salarioBrutoMenosInss > 3751.05 &&
    salarioBrutoMenosInss < 4664.69
  ) {
    ir = salarioBrutoMenosInss * (22.5 / 100) - 636.13;
  } else {
    ir = salarioBrutoMenosInss * (27.5 / 100) - 869.36;
  }

  let salarioLiquido = salarioBrutoMenosInss - ir;

  return salarioLiquido;
}

console.log(netSalaryCalculator(3000));
