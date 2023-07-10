// Sets up an empty grid, fitting the screen. Returns the greed size in px
function setupGrid() {
  // Deltas represent numbers that should be subtracted from the available size to get the size of fitting content
  const WIDTH_DELTA = 32;
  const HEIGHT_DELTA = 103;

  // Setup grid dimensions
  const body = document.querySelector("body");
  const gridDimensions = Math.min(body.offsetWidth - WIDTH_DELTA, body.offsetHeight - HEIGHT_DELTA);
  
  const grid = document.querySelector(".grid");
  grid.style.width = `${gridDimensions}px`;

  // Remove children
  grid.textContent = "";

  return gridDimensions;
}

// Makes an element touched
function onHover(e) {
  this.classList.add("touched");
}

// Sets up size x size grid
function setupCells(gridDimensions, size) {
  const BORDER_DELTA = 2;

  const grid = document.querySelector(".grid");
  const cellDimensions = (gridDimensions - BORDER_DELTA) / size;
  for (let i = 0; i < size * size; ++i) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellDimensions}px`;
    cell.addEventListener("mouseover", onHover);
    grid.appendChild(cell);
  }
}

const DEFAULT_SIZE = 16;

// Entry point
const gridDimensions = setupGrid();
setupCells(gridDimensions, DEFAULT_SIZE);

// Runs setup on every resize
window.addEventListener("resize", e => {
  const gridDimensions = setupGrid();
  setupCells(gridDimensions, DEFAULT_SIZE);
});
