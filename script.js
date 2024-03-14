let gridStart = 16;


let container = document.querySelector('#container');



function Grid(gridSize) {
    for (let i=0; i<gridSize; i++) {
        
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j=0; j<gridSize; j++) {
            let cell = document.createDocumentFragment('div');
            cell.classList.add('cell')
            row.appendChild(cell);
            }
        container.appendChild(row);
       
    }

    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        addEventListener('mouseover', (event) => {
            colorChange(event);
        });
    });
}


function removeGrid() {
    let rows = document.querySelectorAll('.row');
    rows.forEach((row) => row.remove());    
}



function colorChange (event) {
	let colorHex =  "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
    event.targe.style.backgroundColor = `${colorHex}`;    
}



function playerSize () {
    let playerGrid = parseInt(prompt('Enter desired number of squares per side (max 100):', 16));
    if (playerGrid < 1 || playerGrid > 100) {
        alert("Please enter number between 1 and 100");
        playerSize();
        }
    else if (isNaN(playerGrid)) {
        alert("Please enter a number");
        playerSize();
    }
    else {
        removeGrid();
        grid(playerGrid);
    };
    
}


grid(gridStart);

let settingsButton = document.querySelector('button');
settingsButton.addEventListener('click', playerSize);

    
    













