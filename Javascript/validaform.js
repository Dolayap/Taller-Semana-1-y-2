class Comentario {
  constructor(comentario, nombre, email, telefono) {
    this.comentario = comentario;
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this.fecha = new Date().toLocaleDateString();
  }
}

//Eventos que escuchan el evento click a los botones
const agregarBtn = document.querySelector("#agregar-btn");
const editarBtn = document.querySelector("#editar-btn");
const eliminarBtn = document.querySelector("#eliminar-btn");

agregarBtn.addEventListener("click", () => {
  const nombreInput = document.querySelector("#name");
  const correoInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#phone");
  const comentarioInput = document.querySelector("#comment");

  if (
    !nombreInput.value ||
    !correoInput.value ||
    !telefonoInput.value ||
    !comentarioInput.value
  ) {
    alert("Por favor complete todos los campos requeridos.");
    return;
  }

  const comentario = new Comentario(
    comentarioInput.value,
    nombreInput.value,
    correoInput.value,
    telefonoInput.value
  );

  alert(
    `Se ha agregado el comentario:\n\nNombre: ${comentario.nombre}\nCorreo: ${comentario.email}\nTeléfono: ${comentario.telefono}\nComentario: ${comentario.comentario}`
  );
});

editarBtn.addEventListener("click", () => {
  const nombreInput = document.querySelector("#name");
  const correoInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#phone");
  const comentarioInput = document.querySelector("#comment");

  if (
    !nombreInput.value ||
    !correoInput.value ||
    !telefonoInput.value ||
    !comentarioInput.value
  ) {
    alert("Por favor complete todos los campos requeridos.");
    return;
  }

  alert(
    `Se ha editado el comentario:\n\nNombre: ${nombreInput.value}\nCorreo: ${correoInput.value}\nTeléfono: ${telefonoInput.value}\nComentario: ${comentarioInput.value}`
  );
});

eliminarBtn.addEventListener("click", () => {
  const nombreInput = document.querySelector("#name");
  const correoInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#phone");
  const comentarioInput = document.querySelector("#comment");

  if (
    !nombreInput.value ||
    !correoInput.value ||
    !telefonoInput.value ||
    !comentarioInput.value
  ) {
    alert("Por favor complete todos los campos requeridos.");
    return;
  }

  alert(
    `Se ha eliminado el comentario:\n\nNombre: ${nombreInput.value}\nCorreo: ${correoInput.value}\nTeléfono: ${telefonoInput.value}\nComentario: ${comentarioInput.value}`
  );

  //limpieza de los campos
  nombreInput.value = "";
  correoInput.value = "";
  telefonoInput.value = "";
  comentarioInput.value = "";
});
