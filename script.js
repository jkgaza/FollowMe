var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();

  requestAnimationFrame(update);
}

update();

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
}

function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;

  while (el) {
    xPosition += el.offsetLeft - el.scrollLeft + el.clientLeft;
    yPosition += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}
