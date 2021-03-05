function verificaPalindromo(palavra) {
  let palavraDividida = [];

  for (let i = 0; i < palavra.length; i += 1) {
    palavraDividida.push(palavra[i]);
  }

  let palavraContrario = [];
  for (let i2 = palavraDividida.length - 1; i2 >= 0; i2 -= 1) {
    palavraContrario.push(palavraDividida[i2]);
  }

  let check = true;
  for (let i3 = 0; i3 < palavraContrario.length; i3 += 1) {
    if (palavraContrario[i3] != palavraDividida[i3]) {
      check = false;
    }
  }

  return check;
}

console.log(verificaPalindromo("arara"));
