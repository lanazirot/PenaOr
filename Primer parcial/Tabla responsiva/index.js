(async () => {
  const api = "https://rickandmortyapi.com/api/character/";
  await fetch(api)
    .then((response) => response.json())
    .then((datos) => {
      rellenarTablaConDatosAPI(datos);
    })
    .catch((error) => {
      console.log(error);
      fetch("./data.json")
        .then((response) => response.json())
        .then((datos) => {
          rellenarTablaConDatosAPI(datos);
        });
    });
})();

const traducciones = {
  name: "Nombre",
  status: "Estatus",
  species: "Especie",
  gender: "Genero",
  nombreOrigen: "Origen",
  image: "Imagen",
};

const rellenarTablaConDatosAPI = ({ results }) => {
  const tabla = document.querySelector("#main-table tbody");
  const personajesTabla = results.map((personaje) => ({
    name: personaje.name,
    status: personaje.status,
    species: personaje.species,
    gender: personaje.gender,
    nombreOrigen: personaje.origin.name,
    image: personaje.image,
  }));

  for (let element of personajesTabla) {
    let nuevoRow = tabla.insertRow();
    for (key in element) {
      let nuevaCelda = nuevoRow.insertCell();
      let valor;
      if (key === "image") {
        valor = document.createElement("img");
        valor.src = element[key];
      } else {
        valor = document.createTextNode(element[key]);
      }
      nuevaCelda.setAttribute("data-label", traducciones[key]);
      nuevaCelda.appendChild(valor);
    }
  }
};
