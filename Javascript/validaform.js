const form = document.querySelector("#comment-form");
const inputs = form.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (!input.checkValidity()) {
      input.classList.add("error");
      input.nextElementSibling.style.display = "block";
    } else {
      input.classList.remove("error");
      input.nextElementSibling.style.display = "none";
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    // Código para enviar el formulario
    console.log("Comentario enviado");
  } else {
    // Mostrar mensaje de error general
    const errorMsg = document.createElement("p");
    errorMsg.classList.add("error-msg");
    errorMsg.textContent = "Por favor, complete todos los campos obligatorios.";
    form.appendChild(errorMsg);
  }
});
console.log("entrando");
