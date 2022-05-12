/**
 */
$(document).ready(()=>{
    fetch('backend.php').then(res=> {
        return res.json();
    }).then(data=>{
        const {nombre, apellido, correo} = data.user;
        $('#nombre').val(nombre);
        $('#apellidos').val(apellido);
        $('#email').val(correo);
    }).catch(error=>{
        console.log(error);
    })
    
});