// Seleccionar todos los elementos con clase "div"
let elementos = document.querySelectorAll(".div");

// Seleccionar todos los elementos con clase "text"
let textos = document.querySelectorAll(".text");

// Agregar un evento click a cada elemento en la lista de "elementos"
elementos.forEach((elemento, index) => {
  elemento.addEventListener("click", function() {
    // Cambiar el display del texto correspondiente al mismo índice
    if (textos[index].style.display === "none") {
      textos[index].style.display = "block"; // Cambia a visible
    } else {
      textos[index].style.display = "none"; // Oculta el elemento
    }
  });
});