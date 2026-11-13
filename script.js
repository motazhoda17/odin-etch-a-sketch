const container = document.querySelector("#container");
const GRID_WIDTH = 960; // matches #container width in style.css

// Build a grid with `size` squares per side
function createGrid(size) {
  const squareSize = GRID_WIDTH / size; // e.g. 960 / 16 = 60px

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Color the square when the mouse passes over it, like a pen
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

createGrid(16);
