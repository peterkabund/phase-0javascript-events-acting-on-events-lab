// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    
    const rightEdge = 400 - 40;
  
    if (left < rightEdge) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
  