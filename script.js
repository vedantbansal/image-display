let imageNumber = 1;

let prevButton = document.querySelector("#left-button");
let currImage = document.querySelector('#image');
let nextButton = document.querySelector("#right-button");

prevButton.onclick = () => {
    if(imageNumber === 1){
        imageNumber = 6;
    }
    else{
        imageNumber--;
    }

    currImage.setAttribute("src", `data/${imageNumber}.jpg`);
}

nextButton.onclick = () => {
    if(imageNumber === 6){
        imageNumber = 1;
    }
    else{
        imageNumber++;
    }

    currImage.setAttribute("src", `data/${imageNumber}.jpg`);
}