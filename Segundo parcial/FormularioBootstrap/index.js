(()=>{
  window.addEventListener('load' , () => {
    const form = document.getElementById('formEmpleados');
    form.addEventListener('submit',  event => {
      if(form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        Swal.fire('Oops!', 'Revisa los campos del formulario', 'error');
      }
      form.classList.add('was-validated');
    });

    form.addEventListener('submit', (event)=>{
      event.preventDefault();
      const {nombre, apellidos, pais, departamento, tieneVisaLaser} = Object.fromEntries(new FormData(event.target));
      Swal.fire('Registrado', `El empleado ${nombre} ${apellidos}, que vive en ${pais} fue registrado exitosamente. 
      Será asignado al departamento de ${departamento}.`, 'success');
    });
  })
})();
