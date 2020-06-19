/////// Assigning Variables to Paths ///////
let gridSizeBtn = document.querySelector('.btn-gridSize');
let resetGridBtn = document.querySelector('.btn-reset');
let main = document.querySelector('.main');

/////// Starting Grid ///////
createGrid(16, 16);


/////// Removing Old Grid ///////
function removeAllChildNodes() {
    while (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }
}
resetGridBtn.addEventListener('click', removeAllChildNodes);
gridSizeBtn.addEventListener('click', removeAllChildNodes);

/////// Getting # of Columns ///////
gridSizeBtn.addEventListener('click', numOfColumns);

function numOfColumns() {
    let columns = document.getElementById('columns').valueAsNumber;
    document.documentElement.style.setProperty(`--columns`, columns);
    return columns;
}

/////// Getting # of Rows ///////
gridSizeBtn.addEventListener('click', numOfRows);

function numOfRows() {
    let rows = document.getElementById('rows').valueAsNumber;
    document.documentElement.style.setProperty(`--rows`, rows);
    return rows;
}

/////// Creating Grid ///////
gridSizeBtn.addEventListener('click', createGrid);

function createGrid(col, row) {
    divsToCreate = (numOfColumns() * numOfRows());
    for (i = 0; i < divsToCreate; i++) {
        const div = document.createElement('div');
        main.appendChild(div);
    }
}

/////// Creating Grid ///////
div.style.backgroundColor = "#000";