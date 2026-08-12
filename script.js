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

    else {
        j = 0;
        const valueSquared = value**2;
        container.innerHTML = "";
        for(let i=1; i<valueSquared + 1; i++){
            if(i == (valueSquared**0.5)*j + 1) {
                parentElement = document.createElement('div');
                const childElement = document.createElement('div');

                parentElement.setAttribute('class','parent');
                childElement.setAttribute('class','child');

                container.appendChild(parentElement);
                parentElement.appendChild(childElement);

                if (value > 6) {
                    childElement.classList.add('reduced-padding');
                }

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

                if (value > 6) {
                    childElements.classList.add('reduced-padding');
                }

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
    }
});
