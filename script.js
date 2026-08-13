const container = document.querySelector('.container');

let j = 0;
let parentElement;


container.innerHTML = `<button>Change Grids</button>`
const button = document.querySelector('button');
document.querySelector('.container').addEventListener('click', function(e) {
    if (e.target && e.target.tagName === 'BUTTON') {
        // Handle button click
        e.preventDefault();
        const value = Number(prompt("How many squares per row do you want to display? \n (1 - 100)"));

        if(value > 100 || value < 1) {
            alert("please enter the numbers in a valid range! (1 - 10)");
        }

        else if(Number.isNaN(value)) {
            alert("Please enter a valid number.");
        }

        else {
            j = 0;
            const valueSquared = value**2;
            container.innerHTML = `<button>Change Grids</button>`
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

                    childElement.addEventListener("pointerover" , function(event) {
                        event.target.style.backgroundColor = 
                        `rgb(
                        ${Math.floor(Math.random() * 256)},
                        ${Math.floor(Math.random() * 256)},
                        ${Math.floor(Math.random() * 256)}
                        )`;
                    });

                    childElement.dataset.brightness = 1;

                    childElement.addEventListener("pointerout" , function(event) {
                        let currentBrightness = parseFloat(event.target.dataset.brightness);
      
                        // Decrease brightness by 10% (0.1)
                        let newBrightness = currentBrightness - 0.1;
                         if (newBrightness < 0) newBrightness = 0;

                         // FIX 1: Save the new brightness back to the dataset!
                        event.target.dataset.brightness = newBrightness;

                        // Calculate the RGB value (rgb needs whole numbers)
                        let rgbValue = Math.round(255 * newBrightness);
                        event.target.style.backgroundColor = event.target.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue},${rgbValue})`;
                    });

                    j++;
                }
                else {
                    const childElements = document.createElement('div');

                    childElements.setAttribute('class','child');

                    parentElement.appendChild(childElements);


                    childElements.addEventListener("pointerover" , function(event) {
                        event.target.style.backgroundColor = 
                        `rgb(
                        ${Math.floor(Math.random() * 256)},
                        ${Math.floor(Math.random() * 256)},
                        ${Math.floor(Math.random() * 256)}
                        )`;
                    });
                    childElements.dataset.brightness = 1;

                    childElements.addEventListener("pointerout" , function(event) {
                        let currentBrightness = parseFloat(event.target.dataset.brightness);
      
                        // Decrease brightness by 10% (0.1)
                        let newBrightness = currentBrightness - 0.1;
                         if (newBrightness < 0) newBrightness = 0;

                         // FIX 1: Save the new brightness back to the dataset!
                        event.target.dataset.brightness = newBrightness;

                        // Calculate the RGB value (rgb needs whole numbers)
                        let rgbValue = Math.round(255 * newBrightness);
                        event.target.style.backgroundColor = event.target.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue},${rgbValue})`;
                    });
                }
            }
        }
    }
});
