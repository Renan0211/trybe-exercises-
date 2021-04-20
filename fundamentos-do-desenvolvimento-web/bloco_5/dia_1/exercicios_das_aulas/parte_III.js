let title = document.querySelector("header");

title.style.backgroundColor = "#00531E";

let sections = document.getElementsByTagName("section");

for (let iSections = 0; iSections < sections.length; iSections += 1) {
  sections[iSections].style.backgroundColor = "#005F19";
}

let sectionTitle = document.getElementsByTagName("h3");

for (let iSecTitle = 0; iSecTitle < sectionTitle.length; iSecTitle += 1) {
  sectionTitle[iSecTitle].style.backgroundColor = "#028331";
}

let footer = document.getElementById("footer-container");

footer.style.backgroundColor = "#00531E";

document.body.style.backgroundColor = "#CECECE";
