var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

function update() {
  context.beginPath();
  context.arc(100, 100, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();
}

var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

update();