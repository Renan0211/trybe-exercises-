let n = 5;
let asterisco = "";


if(n > 0) {
    for (let nIndex = 1; nIndex <= n; nIndex += 1) {
        let espaco = "";
        for(let espacoINdex = 1; espacoINdex <= n - nIndex; espacoINdex += 1) {
            espaco = espaco + " ";
        }
        asterisco = asterisco + "*";
        console.log(espaco + asterisco);
    }
}
else {
    console.log("Valor inválido");
}