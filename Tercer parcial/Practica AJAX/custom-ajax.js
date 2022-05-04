/**
 * Al cargar el documento, observa los cambios en el campo
 * de email, y si el valor del email que devolvio en RegEx 
 * del @backend es 200, todo es correcto.
 */
$(document).ready(()=>{
    $("#email").change(e=>{
        e.preventDefault();
        $.ajax({
            url: "backend.php",
            method: "POST",
            data: {
                email: $("#email").val(),
            },
            success: response =>{
                const {status, message} = response;
                $('#checkMail').css('display', 'block');
                $('#checkMail').text(message);
                $('#checkMail').removeClass();
                $('#checkMail').addClass(`alert ${status == '200' ? 'alert-success' : 'alert-danger'}`);
            }
        });
    });
});