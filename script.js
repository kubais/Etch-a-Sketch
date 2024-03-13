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

let rows;

function addDivSettings() {
    for (let i=1; i<=rows; i++) {
    
        const newDiv = document.createElement('div');
        // newDiv.textContent = "x";
        newDiv.setAttribute("class", "newDiv");
        container.appendChild(newDiv);

        newDiv.addEventListener('mouseover', e => e.target.classList.add('my-color-class') );
    }
}

button = document.querySelector('button');
button.addEventListener('click', () => {
    rows = prompt('Enter desired number of squares per side (max 100):', 17);
    rows = rows * rows
    console.log(rows);

    removeAllChildNodes(container)

    addDivSettings();
    
})












