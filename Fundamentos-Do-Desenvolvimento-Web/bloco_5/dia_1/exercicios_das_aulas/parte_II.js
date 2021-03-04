let paragraph = document.getElementById("paragraph");
paragraph.style.color = "blue";

let pageTitle = document.getElementById("page-title");
pageTitle.innerText = "BlacKKK's Man";
let secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerText = "Paz sem justiça é escravidão";
secondParagraph.style.color = "red";
secondParagraph.style.fontFamily = "monospace";
let subtitle = document.getElementById("subtitle");

subtitle.innerText = "Racionais MC's";
subtitle.style.color = "brown";
subtitle.style.fontSize = "30px";

let allParagraphs = document.getElementsByTagName("p");

for (let i = 0; i < allParagraphs.length; i += 1) {
  actualParagraph = allParagraphs[i];
  actualParagraph.style.color = "green";
}

let allParagraphsByClass = document.getElementsByClassName("teste");
for (let i2 = 0; i2 < allParagraphsByClass.length; i2 += 1) {
  console.log(allParagraphsByClass[i2].innerText);
}

allParagraphsByClass[0].style.fontSize = "30px";

console.log(document.getElementsByTagName("h4")[0].innerText);
