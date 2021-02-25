let salarioBruto = 3000;
let inss;
let ir;

if (salarioBruto <= 1556.94) {
inss = salarioBruto * (8/100);
}
else if (salarioBruto > 1556.94 && salarioBruto < 2594.93 ) {
    inss = (9/100) * salarioBruto;
}
else if (salarioBruto > 2594.92 && salarioBruto < 5189.83) {
    inss = salarioBruto * (11/100);
}
else {
    inss = 570.88;
}

let salarioBrutoMenosInss = salarioBruto - inss;

// console.log(salalarioBrutoMenosInss);
if (salarioBrutoMenosInss <= 1903.98) {
    ir = 0;
}
else if (salarioBrutoMenosInss  > 1903.98 && salarioBrutoMenosInss < 2826.66) {
    ir = (salarioBrutoMenosInss * (7.5/100)) - 142.8;
}
else if (salarioBrutoMenosInss > 2826.65 && salarioBrutoMenosInss < 3751.06) {
    ir = (salarioBrutoMenosInss * (15/100)) - 354.8;
}
else if (salarioBrutoMenosInss > 3751.05 && salarioBrutoMenosInss < 4664.69) {
    ir = (salarioBrutoMenosInss * (22.5/100)) - 636.13;
}
else {
    ir = (salarioBrutoMenosInss * (27.5/100)) - 869.36;
}

let salarioLiquido = salarioBrutoMenosInss - ir;

console.log(salarioLiquido);