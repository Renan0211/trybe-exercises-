// Esse programa não faz parte dos exercícios do dia, mas sim um exercício que foi feito em aula e eu repliquei depois para fins de estudos e aprendizado


let num1 = Math.ceil(Math.random() * 60);
let num2 = Math.ceil(Math.random() * 60);
let num3 = Math.ceil(Math.random() * 60);
let num4 = Math.ceil(Math.random() * 60);
let num5 = Math.ceil(Math.random() * 60);
let num6 = Math.ceil(Math.random() * 60);
let megaSena = [num1,num2,num3,num4,num5,num6];

let jogo = [12,33,42,48,52,59];
let jogo2 = [11,32,41,47,51,58];
let jogo3 = [13,34,43,49,53,57];
let jogos = [jogo , jogo2 , jogo3];

for(let indexJogos = 0; indexJogos < jogos.length; indexJogos += 1) {
    let hits = 0;
    for (let indexMega = 0; indexMega < megaSena.length; indexMega += 1) {
        for (let indexJogo = 0; indexJogo < jogos[indexJogos].length; indexJogo += 1) {
            if (jogos[indexJogos][indexJogo] === megaSena[indexMega]) {
                hits += 1;
            }
        }
    }
    console.log(`Mega: ${megaSena}`);
    console.log("Jogo " + (indexJogos + 1)+ ": " + jogos[indexJogos]);
    console.log(`Acertos: ${hits}`);
    console.log("-----------------------")
}
