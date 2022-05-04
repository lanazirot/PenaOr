import { validarExistencia } from "./validation.js";

(() => {
  window.addEventListener('load', () => {
    const form = document.getElementById('formEmpleados');
    const toastmsg = document.getElementById('toast-msg');
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    const resetForm = document.getElementById('resetForm');

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
      const { nombre, apellidos, pais, departamento, email} = entries;
      if(validarExistencia(entries)){
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        Swal.fire('Oops!', 'Usuario con correo ya registrado!', 'error');
        return;
      }
      Swal.fire('Registrado', `El empleado ${nombre} ${apellidos}, que vive en ${pais} fue registrado exitosamente. 
      Será asignado al departamento de ${departamento}.`, 'success');
      resetForm.click()
      toastmsg.innerHTML = `${nombre} en proceso. ${departamento} ya fue notificado`  
      toast.show()
      setTimeout(() => {
        toast.hide()
      }, 5000);
      localStorage.setItem(email, JSON.stringify(entries)); 
      $('#checkMail').css('display', 'none');
    });

  })
})();
