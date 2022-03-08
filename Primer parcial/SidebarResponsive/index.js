const nav = document.querySelector("nav"),
  menuHamburguesa = document.getElementById("menuToggle"),
  btnParaCerrarMenu = document.getElementById("btnCerrar"),
  welcomeDiv = document.querySelector(".welcome-div");

menuHamburguesa.addEventListener("click", () => {
  nav.classList.toggle("mostrarMenu");
});

btnParaCerrarMenu.addEventListener("click", () => {
  nav.classList.remove("mostrarMenu");
});

const opcionesMenu = document.querySelectorAll(".opcion-item");
opcionesMenu.forEach((n) =>
  n.addEventListener("click", () => {
    welcomeDiv.style.display = "none"; //quitar al primer div, solo decorativo que se note el cambio
    opcionesMenu.forEach((n) => n.classList.remove("activo"));
    n.classList.add("activo");
    nav.classList.remove("mostrarMenu");
  })
);
