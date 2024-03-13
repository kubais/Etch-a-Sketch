const container = document.querySelector('#container');

function addDiv() {
    for (let i=1; i<=256; i++) {
        
        const newDiv = document.createElement('div');
        newDiv.textContent = "x";
        newDiv.setAttribute("class", "newDiv");
        container.appendChild(newDiv);

        newDiv.addEventListener('mouseover', e => e.target.classList.add('my-color-class') );
    }
}
addDiv();

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let rows;

function addDiv2() {
    for (let i=1; i<=rows; i++) {
    
        const newDiv = document.createElement('div');
        newDiv.textContent = "x";
        newDiv.setAttribute("class", "newDiv");
        container.appendChild(newDiv);

        newDiv.addEventListener('mouseover', e => e.target.classList.add('my-color-class') );
    }
}

button = document.querySelector('button');
button.addEventListener('click', () => {
    rows = prompt('Enter desired number of squares per side (max 100):', 16);
    rows = rows * rows
    console.log(rows);

    removeAllChildNodes(container)

    addDiv2();
    
})












