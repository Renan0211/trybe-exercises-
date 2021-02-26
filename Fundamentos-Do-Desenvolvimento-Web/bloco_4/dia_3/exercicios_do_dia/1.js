let n = 8;


if(n > 0) {
    for(i = 0; i < n; i += 1) {
        let asterisco = "";
        for(let asteriscoIndex = 1; asteriscoIndex <= n; asteriscoIndex += 1) {
            asterisco = asterisco + "*";
        }
       console.log(asterisco); 
    }
}
else {
    console.log("Valor inválido");
}