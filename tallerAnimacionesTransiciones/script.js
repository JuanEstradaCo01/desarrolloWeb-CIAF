const cuadro = document.getElementById("cuadro");
const boton = document.getElementById("boton");

cuadro.style.backgroundColor = "yellow"

boton.addEventListener("click", () => {
    if (cuadro.style.backgroundColor === "yellow") {
        cuadro.style.transition = "background-color .3s";
        cuadro.style.backgroundColor = "blue";
    } else if (cuadro.style.backgroundColor === "blue") {
        cuadro.style.transition = "background-color .3s";
        cuadro.style.backgroundColor = "red";
    } else if (cuadro.style.backgroundColor === "red") {
        cuadro.style.transition = "background-color .3s";
        cuadro.style.backgroundColor = "yellow";
    }
});