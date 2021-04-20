let n = 5;
let asterisco = "";
if(n > 0) {
    for (let nIndex = 0; nIndex < n; nIndex += 1) {
        asterisco = asterisco + "*";
        console.log(asterisco);
    }
}
else {
    console.log("Valor inválido");
}