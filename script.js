const container = document.querySelector("#container");
const GRID_WIDTH = 960; // matches #container width in style.css

// Return a random color like "rgb(120, 45, 230)"
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Build a grid with `size` squares per side
function createGrid(size) {
  container.innerHTML = ""; // remove the old grid first

  const squareSize = GRID_WIDTH / size; // e.g. 960 / 16 = 60px

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Color the square when the mouse passes over it, like a pen.
    // Each pass adds 10% opacity, so 10 passes = fully colored.
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();

      const currentOpacity = Number(square.style.opacity) || 0;
      square.style.opacity = Math.min(currentOpacity + 0.1, 1); // never above 1
    });

    container.appendChild(square);
  }
}

// Ask the user for a new size and rebuild the grid
const resizeButton = document.querySelector("#resize");

resizeButton.addEventListener("click", () => {
  const input = prompt("How many squares per side? (1-100)");
  if (input === null) return; // user clicked Cancel

  const size = parseInt(input);

  if (Number.isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number from 1 to 100.");
    return;
  }

  createGrid(size);
});

createGrid(16);
