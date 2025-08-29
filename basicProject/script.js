const formulario = document.getElementById("form");

// Escuchar el evento de envío del formulario
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputName = document.getElementById("name");
    const name = inputName.value;

    alert(`Hello ${name}, we will contact you soon!`);
});
