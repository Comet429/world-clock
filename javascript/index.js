let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment();

losAngelesDateElement.innerHtml = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHtml = `${losAngelesTime.format(
  "h:mm:ss"
)} <small>${losAngelesTime.format("A")}</small>`;
