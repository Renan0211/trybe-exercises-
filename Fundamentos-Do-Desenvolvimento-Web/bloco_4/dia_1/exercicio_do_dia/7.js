let grade = 59;

if (grade >= 90 && grade < 100) {
    console.log("A");
}
else if (grade >= 80 && grade < 90) {
    console.log("B");
}
else if (grade >= 70 && grade < 80) {
    console.log("C");
}
else if (grade >= 60 && grade < 70) {
    console.log("D");
}
else if (grade >= 50 && grade < 60) {
    console.log("E");
}
else if (grade < 50 && grade >= 0) {
    console.log("F");
}
else {
    console.log("Valor inválido")
}