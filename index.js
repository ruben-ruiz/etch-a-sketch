/////// Assigning Variables to Paths ///////
let gridSizeBtn = document.querySelector('.btn-gridSize');
let resetGridBtn = document.querySelector('.btn-reset');
let colorPicker = document.querySelector('#grid-color');
let main = document.querySelector('.main');

/////// Starting Grid ///////
var columns = 16;
var rows = 16;
createGrid();

/////// Removing Current Grid ///////
function removeAllChildNodes() {
    while (main.firstElementChild) {
        main.removeChild(main.firstElementChild);
    }
    createGrid();
}
resetGridBtn.addEventListener('click', removeAllChildNodes);
gridSizeBtn.addEventListener('click', removeAllChildNodes);

/////// Getting # of Columns ///////
gridSizeBtn.addEventListener('click', numOfColumns);

function numOfColumns() {
    columns = document.getElementById('columns').valueAsNumber;
}

/////// Getting # of Rows ///////
gridSizeBtn.addEventListener('click', numOfRows);

function numOfRows() {
    rows = document.getElementById('rows').valueAsNumber;
}

/////// Creating Grid ///////
gridSizeBtn.addEventListener('click', createGrid);

function createGrid() {
    document.documentElement.style.setProperty(`--columns`, columns);
    document.documentElement.style.setProperty(`--rows`, rows);
    divsToCreate = (columns * rows);
    for (i = 0; i < divsToCreate; i++) {
        const div = document.createElement('div');
        main.appendChild(div);
    }
}

/////// Changing Color ///////
main.addEventListener('mouseover', changeColor);

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

function getRGB(str){
    let rgb = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    let rgbDarken = "rgb(" + (rgb[1] - 26) + "," + (rgb[2] - 26) + "," + (rgb[3] - 26) + ")";
    return rgbDarken;
}

function changeColor(e) {
    let divColor = e.target;
    if (colorPicker.value === "Black") {
        divColor.style.backgroundColor = '#000';
    } else if (!divColor.style.backgroundColor || !divColor.style.backgroundColor == 'rgb(0, 0, 0)') {
        divColor.style.backgroundColor = random_bg_color();
    } else {
        divColor.style.backgroundColor = getRGB(divColor.style.backgroundColor);
    }
}
