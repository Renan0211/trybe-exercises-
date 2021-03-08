function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
function createDaysOfTheMonth() {
  const dezDaysList = [
    29,
    30,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  let listOfMonthDays = document.getElementById("days");
  for (i = 0; i < dezDaysList.length; i += 1) {
    let newDay = document.createElement("li");
    newDay.innerText = dezDaysList[i];
    newDay.className = "day";
    if (
      newDay.innerText == 24 ||
      newDay.innerText == 25 ||
      newDay.innerText == 31
    ) {
      newDay.className += " holiday";
    }
    if (
      newDay.innerText == 4 ||
      newDay.innerText == 11 ||
      newDay.innerText == 18 ||
      newDay.innerText == 25
    ) {
      newDay.className += " friday";
    }
    listOfMonthDays.appendChild(newDay);
  }
}

function createButton(string) {
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerText = string;
  let div = document.querySelector(".buttons-container");
  div.appendChild(button);
}

function createButton2(string) {
  let button = document.createElement("button");
  button.id = "btn-friday";
  button.innerText = string;
  let div = document.querySelector(".buttons-container");
  div.appendChild(button);
}

function sextaFeira() {
  // O uso de flag aqui foi feito depois de consulta ao stack overflow. Link : https://stackoverflow.com/questions/55147410/html-javascript-button-click-again-to-undo
  let flag = true;
  let fridayButton = document.getElementById("btn-friday");
  let fridays = document.getElementsByClassName("friday");
  let fridaysDays = ["4", "11", "18", "25"];
  fridayButton.addEventListener("click", function () {
    for (i2 = 0; i2 < fridays.length; i2 += 1) {
      fridays[i2].innerText = flag ? "Sextou!!!" : `${fridaysDays[i2]}`;
    }
    flag = !flag;
  });
}
function zoomDays() {
  let days = document.getElementsByClassName("day");
  for (i = 0; i < days.length; i += 1) {
    days[i].addEventListener("mouseover", function (evt) {
      evt.target.style.fontSize = "40px";
    });
  }
}

function unzommDays() {
  let days = document.getElementsByClassName("day");
  for (i = 0; i < days.length; i += 1) {
    days[i].addEventListener("mouseout", function (evt) {
      evt.target.style.fontSize = "20px";
    });
  }
}

function createTask(string) {
  let task = document.createElement("span");
  task.innerText = string;
  let myTasks = document.querySelector(".my-tasks");
  myTasks.appendChild(task);
}

function createCaption(color) {
  let caption = document.createElement("div");
  caption.className = "task";
  caption.style.backgroundColor = color;
  let myTasks = document.querySelector(".my-tasks");
  myTasks.appendChild(caption);
}

function selectTask() {
  let tasks = document.getElementsByClassName("task");
  for (i = 0; i < tasks.length; i += 1) {
    let flag = true;
    tasks[i].addEventListener("click", function (evt) {
      evt.target.className = flag ? "task selected" : "task";
      flag = !flag;
    });
  }
}
function changeDayBackground() {
  let flag = true;
  let days = document.getElementsByClassName("day");
  for (let i = 0; i < days.length; i += 1) {
    days[i].addEventListener("click", function (evt) {
      evt.target.style.color = flag
        ? document.querySelector(".selected").style.backgroundColor
        : "rgb(119,119,119)";
      flag = !flag;
    });
  }
}
createDaysOfTheWeek();
createDaysOfTheMonth();
createButton("Feriados");
createButton2("Sexta-feira");
sextaFeira();
zoomDays();
unzommDays();
createTask("Comer comida");
createCaption("green");
selectTask();
changeDayBackground();
// Escreva seu código abaixo.
