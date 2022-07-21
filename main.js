function createGrid(size = 16) {
    const grid = document.querySelector('.grid');
    const totalCells = size ** 2;
    const cellSize = 500 / size; // where 500 is the width/height of the grid

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', `border: 2px solid yellow; margin: 0; padding: 0; width: ${cellSize}px; \
            height: ${cellSize}px;`);
        grid.appendChild(cell);
    }

    return size;
}

createGrid();

function getGridSize() {
    askAgain:
    while (true) {
        let gridSize = parseInt(prompt('The value must be within the range of 4 and 64'));

        if (gridSize >= 4 && gridSize <= 64) {
            return gridSize;
        } else if (!gridSize) {
            alert('Canceled');
            return;
        } else {
            alert('Nice try, but the value must be within the range of 4 and 64');
            continue askAgain;
        }
    }
}

const resizeGridBtn = document.querySelector('.resize-grid-btn');
resizeGridBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.remove();
    });

    createGrid(getGridSize());
});