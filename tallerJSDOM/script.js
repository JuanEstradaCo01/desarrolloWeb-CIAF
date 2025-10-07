const image = document.getElementById("catImage");
const buttonImages = document.getElementById("nextImgButton");

buttonImages.addEventListener("click", () => {

    if (image.src.includes("cat1.jpg")) {
        image.src = "./imgs/cat2.jpg";
        image.alt = "Cat 2";
    } else if (image.src.includes("cat2.jpg")) {
        image.src = "./imgs/cat3.jpg";
        image.alt = "Cat 3";
    } else if (image.src.includes("cat3.jpg")) {
        image.src = "./imgs/cat1.jpg";
        image.alt = "Cat 1";
    }

});

//--------------------------------------------------------------
const buttonCounter = document.getElementById("clickButton");
const clicksNumber = document.getElementById("clicksNumber");

let count = 0;

function counterClick() {
    count++;
    clicksNumber.textContent = `Clicks: ${count}`;
};

buttonCounter.addEventListener("click", counterClick);