import addProgramador from "./js/addProgramador";
import Programador from "./js/models/Programador";

(() => {
  window.addEventListener('load', () => {
    const form = document.getElementById('formEmpleados');

    form.addEventListener('submit', event => {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        Swal.fire('Oops!', 'Revisa los campos del formulario', 'error');
      }
      form.classList.add('was-validated');
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const entries = Object.fromEntries(new FormData(event.target));
      const programador = Programador.from(entries);
      programador.visa_laser = entries.visa_laser === 'on';
      programador.vehiculo_personal = entries.vehiculo_personal === 'on';
      programador.equipo_personal = entries.equipo_personal === 'on';
      addProgramador(programador);
    });

  })
})();
