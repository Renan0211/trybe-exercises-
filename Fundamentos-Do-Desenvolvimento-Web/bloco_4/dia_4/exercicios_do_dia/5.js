let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
};

info.recorrente = "Sim";

info2.recorrente = "Sim";

for (key in info && info2) {
  if (info[key] === "Sim" && info2[key] === "Sim") {
    console.log("Ambos são recorrentes");
  } else {
    console.log(info[key] + " e " + info2[key]);
  }
}
