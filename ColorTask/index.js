let body = document.querySelector("body");
let blackBtn = document.getElementById("black");
let whiteBtn = document.getElementById("white");
let blueBtn = document.getElementById("blue");
let redBtn = document.getElementById("red");

function changeToBlack() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  blackBtn.style.borderColor = "white";
}
function changeToRed() {
  body.style.backgroundColor = "red";
  body.style.color = "white";
}
function changeToBlue() {
  body.style.backgroundColor = "blue";
  body.style.color = "white";
}
function changeToWhite() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
}
blackBtn.onclick = changeToBlack;
redBtn.onclick = changeToRed;
whiteBtn.onclick = changeToWhite;
blueBtn.onclick = changeToBlue;
