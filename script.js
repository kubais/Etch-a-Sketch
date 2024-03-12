const container = document.querySelector('#container');

function addDiv() {
    for (let i=1; i<=256; i++) {
        
        const newDiv = document.createElement('div');
        newDiv.textContent = "test";
        newDiv.setAttribute("class", "newDiv");
        container.appendChild(newDiv);
        
        
    }
 }

 addDiv();
