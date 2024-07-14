function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHtml = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHtml = losAngelesTime.format(
    "h:mm:ss [<small>A</small>"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHtml = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHtml = tokyoTime.format("h:mm:ss [<small>A</small>");
}

updateTime();
setInterval(updateTime, 1000);
