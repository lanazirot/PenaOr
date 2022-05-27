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


const eliminarProgramador = async () => {
    const id = $('#id').val();
    console.log(id);
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

const modificarProgramador = async () => {
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
        //Actualizar los campos en la fila
        $('#' + nuevoProgramador.id).children().eq(1).text(nuevoProgramador.nombre);
        $('#' + nuevoProgramador.id).children().eq(2).text(nuevoProgramador.apellidos);
        $('#' + nuevoProgramador.id).children().eq(3).text(nuevoProgramador.correo);
        $('#' + nuevoProgramador.id).children().eq(4).text(nuevoProgramador.departamento);
    }
    else {
        Swal.fire('Oops!', message, 'error');
    }
};

const mostrarProgramador = async programador => {
    const programadorModal = new bootstrap.Modal(document.getElementById('programadorModal'), {});
    //Peticion fetch para traer todos los datos por el ID del programador
    const peticion = await fetch(`../api/gateway/getById.php?id=${programador.id}`);
    const { code, data, message } = await peticion.json();

    //Obtener datos del programador
    const { id, nombre, apellidos, correo, departamento,
        visa_laser, vehiculo_personal, equipo_personal,
        estado_civil, pais, detalles } = data;

    if (code === 200) {
        $('#id').val(id);
        $('#nombre').val(nombre);
        $('#apellidos').val(apellidos);
        $('#nombreCompleto').text(nombre.concat(' ').concat(apellidos));
        $('#departamento').val(departamento);
        $('#detalles').text(detalles);
        $('#correo').val(correo);
        $('#pais').val(pais);
        $('#estado_civil').val(estado_civil);
        $('#visa_laser').prop('checked', visa_laser);
        $('#vehiculo_personal').prop('checked', vehiculo_personal);
        $('#equipo_personal').prop('checked', equipo_personal);
        $('#eliminarProgramador').click(() => { eliminarProgramador(); programadorModal.hide(); });
        $('#modificarProgramador').click(() => { modificarProgramador(); programadorModal.hide(); });
        programadorModal.show();
    } else {
        Swal.fire('Oops!', message, 'error');
    }
}

export { listarProgramadores };