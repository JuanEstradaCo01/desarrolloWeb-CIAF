const header = document.getElementById("header");
const btnDarkLigth = document.getElementById("btnDarkLigth");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

let darkThemeState = false;

btnDarkLigth.addEventListener("click", () => {

    if (darkThemeState === false) {
        darkThemeState = true
        header.style.backgroundColor = "Gray";
        main.style.backgroundColor = "Black";
        main.style.color = "grey";
        footer.style.backgroundColor = "Gray";
        footer.style.color = "black";
        btnDarkLigth.textContent = "Light Mode";
        btnDarkLigth.style.color = "black";
        btnDarkLigth.style.backgroundColor = "White";
    } else if (darkThemeState === true) {
        darkThemeState = false
        header.style.backgroundColor = "White";
        main.style.backgroundColor = "beige";
        main.style.color = "black";
        footer.style.backgroundColor = "White";
        footer.style.color = "black";
        btnDarkLigth.textContent = "Dark Mode";
        btnDarkLigth.style.color = "white";
        btnDarkLigth.style.backgroundColor = "black";
    }

});