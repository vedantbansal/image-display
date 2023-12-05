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

let toggleButton = document.querySelector("#switch");

toggleButton.onclick = () => {
    
    if (toggleButton.checked == true){
        // console.log(toggleButton.checked)
        // document.querySelector("body").style.remove
        document.querySelector("body").style.color = '#fff';
        document.querySelector("body").style.backgroundColor = '#121212';

    } else{
        document.querySelector("body").style.color = 'black';
        document.querySelector("body").style.backgroundColor = '#fff';
    }

}