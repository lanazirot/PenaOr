import Programador from "../../js/models/Programador";
import * as lang from './language.js'

alertify.defaults.theme.ok = "btn btn-primary";
alertify.defaults.theme.cancel = "btn btn-danger";
alertify.defaults.theme.input = "form-control";

const listarProgramadores = async () => {
    //Obtenemos todos los programadores
    $("#listadoProgramadores").dataTable({
        ajax: '../api/gateway/getAll.php',
        columns: [
            { data: "id" },
            { data: "nombre" },
            { data: "apellidos" },
            { data: "correo" },
            { data: "departamento" }
        ],
        scroller: true,
        deferRender: true,
        language: lang.default,
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "Todos"]
        ],
        rowId: "id",
    });
    $('#listadoProgramadores tbody').on('dblclick', 'tr', function () {
        const table = $('#listadoProgramadores').DataTable();
        const data = table.row(this).data();
        mostrarProgramador(data);
    });
}


const eliminarProgramador = async () => {


    alertify.confirm("¿Estás seguro de eliminar este programador?",
        async () => {
            const peticion = await fetch(`../api/gateway/delete.php?id=${id}`, {
                method: 'POST'
            });
            const { code, message } = await peticion.json();
            if (code === 200) {
                Swal.fire('Exito!', message, 'success');
                const id = $('#id').val();
                $('#' + id).remove();
                $('#listadoProgramadores').DataTable().ajax.reload();
            }
            else {
                Swal.fire('Oops!', message, 'error');
            }
        }, () => { }).set({title: "Eliminar programador"});
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
        $('#listadoProgramadores').DataTable().ajax.reload();
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