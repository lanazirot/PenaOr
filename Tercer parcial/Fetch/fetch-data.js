/**
 */
$(document).ready(() => {

   /* $("#empleadoAleatorio").click(e => {
        fetch('backend.php').then(res => res.json()).
            then(data => {
                const { nombre, apellido ,correo, website } = data.user;
                console.log(data);
                $('#nombre').val(nombre);
                $('#apellidos').val(apellido);
                $('#email').val(correo);
                $('#detalles').val(`Sitio web: ${website || 'No tiene'}`);
            }).catch(console.log);
    });*/

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }


    $("#empleadoAleatorio").click(async e => {
       /* fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).
            then(data => {
                const {name: nombre, email: correo, website} = data[getRandomInt(0, data.length)];
                $('#nombre').val(nombre);
                $('#email').val(correo);
                $('#detalles').val(`Sitio web: ${website || 'No tiene'}`);
            }).catch(console.log);*/

        const peticion = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await peticion.json();
        const {name: nombre, email: correo, website} = data[getRandomInt(0, data.length)];
        $('#nombre').val(nombre);
        $('#email').val(correo);
        $('#detalles').val(`Sitio web: ${website || 'No tiene'}`);


    });

});