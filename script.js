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

        childElement.addEventListener("onmouseover" , function(e) {

        })
        childElement.addEventListener("onmouseout" , function(e) {
            
        })

        j++;
    }
    else {
        const childElements = document.createElement('div');

        childElements.setAttribute('class','child');

        parentElement.appendChild(childElements);

        childElement.addEventListener("onmouseover" , function(e) {

        })
        childElement.addEventListener("onmouseout" , function(e) {

        })
    }
}