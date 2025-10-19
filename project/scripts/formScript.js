const formulario = document.getElementById("form");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputName = document.getElementById("name");
    const name = inputName.value;

    alert(`Hello ${name}, we will contact you soon!`);
});