const container = document.querySelector('#container');

function addDivStart() {
    for (let i=1; i<=289; i++) {
        
        const newDiv = document.createElement('div');
        // newDiv.textContent = "x";
        newDiv.setAttribute("class", "newDiv");
        container.appendChild(newDiv);

        newDiv.addEventListener('mouseover', e => e.target.classList.add('my-color-class') );
    }
}
addDivStart();

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



function randomColor (colorHex) {
	colorHex =  "#" + (Math.random()	* 0xFFFFFF<<0).toString(16);
    console.log(colorHex);
    return colorHex;
}

function addDivSettings() {
    for (let i=1; i<=rows; i++) {
    
        const newDiv = document.createElement('div');
        // newDiv.textContent = "x";
        newDiv.setAttribute("class", "newDiv");
        container.appendChild(newDiv);

        // newDiv.addEventListener('mouseover', e => e.target.style.backgroundColor = '${randomColor()}'); //to have random color
        newDiv.addEventListener('mouseover', e => e.target.classList.add('my-color-class') ); // to change only to red
        
    }
}
let rows;

function playerSize () {
    rows = parseInt(prompt('Enter desired number of squares per side (max 100):', 17));
    if (rows < 1 || rows > 100) {
        alert("Please enter number between 1 and 100");
        playerSize();
        }
    else if (isNaN(rows)) {
        alert("Please enter a number");
        playerSize();
    }
    else {
        rows = rows * rows
        addDivSettings();
    };
    
}

button = document.querySelector('button');
button.addEventListener('click', () => {
    
    removeAllChildNodes(container)
    playerSize();     
    
    
})












