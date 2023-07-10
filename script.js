// Default grid size
let gridSize = 16;
let gridDimensions;
let currentColor = 256;

// Sets up an empty grid, fitting the screen. Returns the greed size in px
function setupGrid() {
  // Deltas represent numbers that should be subtracted from the available size to get the size of fitting content
  const WIDTH_DELTA = 32;
  const HEIGHT_DELTA = 171;

  // Setup grid dimensions
  const body = document.querySelector("body");
  gridDimensions = Math.min(body.offsetWidth - WIDTH_DELTA, body.offsetHeight - HEIGHT_DELTA);
  
  const grid = document.querySelector(".grid");
  grid.style.width = `${gridDimensions}px`;
}

// Colors the cell
function onHover() {
  const RGB_MAX = 256;
  const STEP = 10;

  // Update the color
  currentColor = Math.min(RGB_MAX, Math.floor(currentColor - RGB_MAX / STEP));
  const colorStr = `rgb(${currentColor}, ${currentColor}, ${currentColor})`;

  // Change it
  this.style.backgroundColor = colorStr;
}

// Sets up size x size grid
function setupCells() {
  const BORDER_DELTA = 2;

  // Remove children
  const grid = document.querySelector(".grid");
  grid.textContent = "";

  // Calculate cell width 
  const cellDimensions = (gridDimensions - BORDER_DELTA) / gridSize;

  for (let i = 0; i < gridSize * gridSize; ++i) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellDimensions}px`;
    cell.addEventListener("mouseover", onHover);
    grid.appendChild(cell);
  }
}

function getSize() {
  const LIMIT = 100;

  const size = parseInt(prompt("Enter a new size:"));
  if (isNaN(size) || size < 1 || size > LIMIT) {
    alert("Enter a number between 1 and 100");
    return;
  }
  
  gridSize = size;
}

setupGrid();
setupCells();

const button = document.querySelector(".change-size");
button.addEventListener("click", () => {
  getSize();
  console.log(gridSize);
  setupCells();
});
