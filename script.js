const container = document.querySelector('div');
let j = 0;
let parentElement;
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