/////// Assigning Variables to Paths ///////
let gridSizeBtn = document.querySelector('.btn-gridSize');
let main = document.querySelector('.main');

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
function createGrid() {
    divsToCreate = (numOfColumns() * numOfRows());
    for (i = 0; i < divsToCreate; i++) {
        const div = document.createElement('div');
        div.textContent = "Hello World!";
        main.appendChild(div);
    }
}