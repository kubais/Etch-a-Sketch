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

// const divs = document.querySelectorAll('.newDiv');

// divs.forEach((newDiv) => {
//     newDiv.addEventListener('mouseover', () => {
//         document.getElementsByClassName("newDiv")[1].style.color = "red";
//     }
//     )
// }
// );


// divs.forEach((newDiv) => {
//     newDiv.addEventListener('mouseout', () => {
//         document.getElementsByClassName("newDiv")[1].style.color = "blue";
//     }
//     )
// }
// )




