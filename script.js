const container = document.querySelector('.container');
const button = document.querySelector('button');

let j = 0;
let parentElement;

button.addEventListener("pointerdown" , function(e) {
    event.preventDefault();
    const value = Number(prompt("How many squares per row do you want to display? \n (1 - 10)"));
    if(value > 10 || value < 1) {
        alert("please enter the numbers in a valid range! (1 - 10)");
    }
    else if(Number.isNaN(value)) {
        alert("Please enter a valid number.");
    }
});

for(let i=1;i<17;i++){
    if(i == (16**0.5)*j + 1 && Math.floor(j) == j) {
        parentElement = document.createElement('div');
        const childElement = document.createElement('div');

        parentElement.setAttribute('class','parent');
        childElement.setAttribute('class','child');

        container.appendChild(parentElement);
        parentElement.appendChild(childElement);

        childElement.addEventListener("mouseover" , function(event) {
            event.target.style.backgroundColor = 
            `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)}
            )`;
        });
        childElement.addEventListener("mouseout" , function(event) {
            event.target.style.backgroundColor = `rgb(255 , 255 , 255)`;
        });

        j++;
    }
    else {
        const childElements = document.createElement('div');

        childElements.setAttribute('class','child');

        parentElement.appendChild(childElements);

        childElements.addEventListener("mouseover" , function(event) {
            event.target.style.backgroundColor = 
            `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)}
            )`;
        });
        childElements.addEventListener("mouseout" , function(event) {
            event.target.style.backgroundColor = `rgb(255, 255, 255)`;
        });
    }
}