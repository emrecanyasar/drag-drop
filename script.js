let isDragging = false;
let dragBox = document.querySelector(".main");
let offsetX = 0;
let offsetY = 0;

dragBox.addEventListener("mousedown", startDragging);
dragBox.addEventListener("mousemove", drag);
dragBox.addEventListener("mouseup", stopDragging);

function startDragging(event) {
  isDragging = true;
  offsetX = event.clientX - dragBox.offsetLeft;
  offsetY = event.clientY - dragBox.offsetTop;
}

function drag(event) {
  if (isDragging) {
    let x = event.clientX - offsetX;
    let y = event.clientY - offsetY;

    let minX = 0;
    let minY = 0;
    let maxX = document.body.clientWidth - dragBox.clientWidth;
    let maxY = document.body.clientHeight - dragBox.clientHeight;

    if (x < minX) {
      x = minX;
    } else if (x > maxX) {
      x = maxX;
    }
    if (y < minY) {
      y = minY;
    } else if (y > maxY) {
      y = maxY;
    }

    dragBox.style.left = x + "px";
    dragBox.style.top = y + "px";
  }
}

function stopDragging() {
  isDragging = false;
}
