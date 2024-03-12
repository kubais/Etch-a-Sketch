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

button = document.querySelector('button');
let rows;
button.addEventListener('click', () => {
    rows = prompt('Enter desired number of squares per side (max 100):', 16);
    
})




