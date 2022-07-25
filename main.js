window.addEventListener('load', () => {
    createGrid();
    customColorBtn.classList.add('active');
    customPenColor = colorPicker.value;
});

const grid = document.querySelector('.grid');

function createGrid(size = 16) {
    const totalCells = size ** 2;
    const cellSize = 500 / size; // where 500 is the width/height of the grid

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', `margin: 0; padding: 0; width: ${cellSize}px; \
            height: ${cellSize}px;`);
        grid.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseup', () => {
            if (colorPicker.classList.contains('active') ||
                customColorBtn.classList.contains('active')) {
                cell.style.backgroundColor = colorPicker.value || customPenColor;
                // to prevent the colorPicker element from getting the background-color: black
                colorPicker.classList.remove('active');
            } else if (randomColorBtn.classList.contains('active')) {
                randomRgb(255);
                const r = randomPenColor[0];
                const g = randomPenColor[1];
                const b = randomPenColor[2];
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else if (eraserBtn.classList.contains('active')) {
                cell.style.backgroundColor = 'white';
            }
        });
    });

    const clearBtn = document.querySelector('.clear-btn');
    clearBtn.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.style.backgroundColor = 'white';
        });
    });

    return size;
}

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
        grid.removeChild(cell);
    });

    createGrid(getGridSize())
});

const colorPicker = document.querySelector('.color-picker');
colorPicker.addEventListener('change', () => {
    colorPicker.classList.add('active');
    customColorBtn.classList.add('active');
    dismissBtns(colorPicker);
    return colorPicker.setAttribute('value', `${e.target.value}`);
});

let customPenColor;
const customColorBtn = document.querySelector('.custom-color-btn');
customColorBtn.addEventListener('click', () => {
    customColorBtn.classList.add('active');
    colorPicker.classList.add('active');
    dismissBtns(customColorBtn);
    return customPenColor = colorPicker.value;
});

const randomColorBtn = document.querySelector('.random-color-btn');
randomColorBtn.addEventListener('click', () => {
    randomColorBtn.classList.add('active');
    dismissBtns(randomColorBtn);
});

let randomPenColor;
function randomRgb(maxValue) {
    let stringRgb = '';

    for (let i = 0; i < 3; i++) {
        if (i < 2) {
            stringRgb += Math.floor(Math.random() * maxValue) + ", ";
        } else {
            stringRgb += Math.floor(Math.random() * maxValue);
        }
    }

    const intArrayRgb = stringRgb.split(' ').map(element => parseInt(element));
    return randomPenColor = intArrayRgb;
}

const eraserBtn = document.querySelector('.eraser-btn');
eraserBtn.addEventListener('click', () => {
    eraserBtn.classList.add('active');
    dismissBtns(eraserBtn);
});

function dismissBtns(activeBtn) {
    switch (true) {
        case (activeBtn === colorPicker):
        case (activeBtn === customColorBtn):
            colorPicker.classList.remove('active');
            randomColorBtn.classList.remove('active');
            eraserBtn.classList.remove('active');
            break;
        case (activeBtn === randomColorBtn):
            colorPicker.classList.remove('active');
            customColorBtn.classList.remove('active');
            eraserBtn.classList.remove('active');
            break;
        case (activeBtn === eraserBtn):
            colorPicker.classList.remove('active');
            randomColorBtn.classList.remove('active');
            customColorBtn.classList.remove('active');
            break;
    }
}