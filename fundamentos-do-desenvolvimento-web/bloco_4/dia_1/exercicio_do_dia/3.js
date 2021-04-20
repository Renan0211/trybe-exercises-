let a = 13;
let b = 10;
let c = 13;

if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else if (c > a && c > b) {
    console.log(c);
}
else {
    console.log("Dois ou mais numeros tem o mesmo valor");
}