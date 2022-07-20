function createGrid(size = 16) {
    const grid = document.querySelector('.grid');
    const totalCells = size ** 2;
    const cellSize = 500 / size; // where 500 is the width/height of the grid

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('style', `margin: 0; padding: 0; width: ${cellSize}px; \ 
            height: ${cellSize}px;`);
        grid.appendChild(cell);
    }

    return size;
}

createGrid();