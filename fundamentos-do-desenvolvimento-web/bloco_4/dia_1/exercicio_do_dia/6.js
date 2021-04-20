let nameOfThePiece = "REI";

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
        console.log("em linhas e colunas")
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
