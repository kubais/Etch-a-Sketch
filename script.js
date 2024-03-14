const gridStart = 16;






function createGrid(gridSize) {

    let container = document.querySelector('.container');

    for (let i=0; i<gridSize; i++) {
        
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j=0; j<gridSize; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
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

    if (!event.target.style.backgroundColor) {        
        let colorHex =  "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
        event.target.style.backgroundColor = `${colorHex}`;    
        // event.target.style.opacity = '.1';
    }

    //  else {
    //      let opacity = +event.target.style.opacity;
    //      opacity += .1;
    //      event.target.style.opacity = opacity;
    //  }
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
        createGrid(playerGrid);
    };
    
}


createGrid(gridStart);

let settingsButton = document.querySelector('button');
settingsButton.addEventListener('click', playerSize);

    
    












