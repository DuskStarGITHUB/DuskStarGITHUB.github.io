document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const bodyInput = document.getElementById("body");
  const submitButton = document.getElementById("submit");

  // Función para validar el campo nombre en tiempo real
  nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() === "") {
      nameInput.setCustomValidity("Por favor, completa este campo.");
    } else {
      nameInput.setCustomValidity("");
    }
  });

  // Función para validar el campo email en tiempo real
  emailInput.addEventListener("input", function () {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
      emailInput.setCustomValidity(
        "Por favor, ingresa una dirección de correo válida."
      );
    } else {
      emailInput.setCustomValidity("");
    }
  });

  // Función para validar el campo asunto en tiempo real
  subjectInput.addEventListener("input", function () {
    if (subjectInput.value.trim() === "") {
      subjectInput.setCustomValidity("Por favor, completa este campo.");
    } else {
      subjectInput.setCustomValidity("");
    }
  });

  // Función para validar el campo mensaje en tiempo real
  bodyInput.addEventListener("input", function () {
    if (bodyInput.value.trim() === "") {
      bodyInput.setCustomValidity("Por favor, completa este campo.");
    } else {
      bodyInput.setCustomValidity("");
    }
  });

  // Agregar evento de escucha para validar el formulario al enviar
  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault(); // Detener el envío del formulario si hay campos no válidos
    }
  });
});
