document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const submitButton = document.getElementById("submit");

  form.addEventListener("submit", function (event) {
    // Validar campos aquí
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;

    if (!name || !email || !subject || !body) {
      alert("Por favor, completa todos los campos.");
      event.preventDefault(); // Detener el envío del formulario si hay campos vacíos
    }
  });
});