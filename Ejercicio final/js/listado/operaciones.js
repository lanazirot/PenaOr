import Programador from "../../js/models/Programador";

const listarProgramadores = async () => {
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
            <td>${programador.departamento}</td>`,
            on: {
                dblclick() {
                    mostrarProgramador(programador);
                }
            }
        }));
        $('#listadoProgramadores').append($rows);
    } else {
        Swal.fire('Oops!', message, 'error');
    }
}


const eliminarProgramador = async id => {
    const peticion = await fetch(`../api/gateway/delete.php?id=${id}`, {
        method: 'POST'
    });
    const { code, message } = await peticion.json();
    if (code === 200) {
        Swal.fire('Exito!', message, 'success');
        $('#' + id).remove();
    }
    else {
        Swal.fire('Oops!', message, 'error');
    }
}

const modificarProgramador = async programador => {
    //Obtener datos del modal y asignarlos al programador
    const entries = Object.fromEntries(new FormData(document.getElementById('programadorForm')));
    const nuevoProgramador = Programador.from(entries);
    nuevoProgramador.id = entries.id;
    nuevoProgramador.visa_laser = entries.visa_laser === 'on';
    nuevoProgramador.vehiculo_personal = entries.vehiculo_personal === 'on';
    nuevoProgramador.equipo_personal = entries.equipo_personal === 'on';

    //Enviar los datos al servidor
    const peticion = await fetch(`../api/gateway/update.php`, {
        method: 'POST',
        body: JSON.stringify(nuevoProgramador)
    });
    const { code, message } = await peticion.json();
    if (code === 200) {
        Swal.fire('Exito!', message, 'success');
        //Actualizar la fila
        $('#' + nuevoProgramador.id).replaceWith($('<tr>', {
            id: nuevoProgramador.id,
            append: `<td>${nuevoProgramador.id}</td>
            <td>${nuevoProgramador.nombre}</td>
            <td>${nuevoProgramador.apellidos}</td>
            <td>${nuevoProgramador.correo}</td>
            <td>${nuevoProgramador.departamento}</td>`,
            on: {
                dblclick() {
                    mostrarProgramador(nuevoProgramador);
                }
            }
        }));
    }
    else {
        Swal.fire('Oops!', message, 'error');
    }



};

const mostrarProgramador = async programador => {
    const programadorModal = new bootstrap.Modal(document.getElementById('programadorModal'), {});
    $('#nombreCompleto').text(programador.nombre.concat(' ').concat(programador.apellidos));
    $('#nombre').val(programador.nombre);
    $('#id').val(programador.id);
    $('#apellidos').val(programador.apellidos);
    $('#departamento').val(programador.departamento);
    $('#detalles').text(programador.detalles);
    $('#correo').val(programador.correo);
    $('#pais').val(programador.pais);
    $('#estado_civil').val(programador.estado_civil);
    $('#visa_laser').prop('checked', programador.visa_laser);
    $('#vehiculo_personal').prop('checked', programador.vehiculo_personal);
    $('#equipo_personal').prop('checked', programador.equipo_personal);
    $('#eliminarProgramador').click(() => { eliminarProgramador(programador.id); programadorModal.hide(); });
    $('#modificarProgramador').click(() => { modificarProgramador(programador); programadorModal.hide(); });
    programadorModal.show();
}

export { eliminarProgramador, modificarProgramador, mostrarProgramador, listarProgramadores };