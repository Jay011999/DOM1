
let circle = document.getElementById('circle');

circle.addEventListener("click", changeColor);

function changeColor() {
  let randomColor = Math.floor(Math.random() * 16777216).toString(16);
  randomColor.padStart(6, '0');
  circle.style.backgroundColor = `#${randomColor}`;
}

