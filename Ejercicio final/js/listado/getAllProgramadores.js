import {eliminarProgramador, modificarProgramador} from './operaciones.js';

$(document).ready(async () => {
    //Obtenemos todos los programadores
    const peticion = await fetch('../api/gateway/getAll.php');
    const { code, data, message } = await peticion.json();
    if (code === 200) {
        //Llenar la tabla listadoProgramadores
        const $rows = data.map(programador => $('<tr>', {
            id: programador.id,
            append: `<td>${programador.id}</td>
            <td>${programador.nombre}</td>
            <td>${programador.apellidos}</td>
            <td>${programador.correo}</td>
            <td>${programador.departamento}</td>
            <td>
                <button class="btn btn-danger" onclick="eliminarProgramador(${programador.id})">Eliminar</button>
            </td>`,
            on: {
                click() {
                    console.log(programador.id);
                }
            }
        }));

        $('#listadoProgramadores').append($rows);

    } else {
        Swal.fire('Oops!', message, 'error');
    }


});
