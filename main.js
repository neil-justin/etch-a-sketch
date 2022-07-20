function createGrid(size = 16) {
    const grid = document.querySelector('.grid');
    const totalGridElements = size ** 2;
    const elementSize = 500 / size; // where 500 is the width/height of the grid

    for (let i = 0; i < totalGridElements; i++) {
        const gridElement = document.createElement('div');
        gridElement.setAttribute('style', `margin: 0; padding: 0; width: ${elementSize}px; \ 
            height: ${elementSize}px;`);
        grid.appendChild(gridElement);
    }

    return size;
}

createGrid();