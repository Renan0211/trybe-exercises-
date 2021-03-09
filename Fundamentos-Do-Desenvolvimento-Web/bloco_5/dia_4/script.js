// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).

localStorage.setItem("backgroundColor","#f3f3f3")
localStorage.setItem("fontColor", "black")
localStorage.setItem("fontSize","25px")
localStorage.setItem("lineHeight","1.6")
localStorage.setItem("fontFamily","monospace")

function changeBackgroundColor() {
  document.body.style.backgroundColor = localStorage.getItem("backgroundColor")
}

changeBackgroundColor()