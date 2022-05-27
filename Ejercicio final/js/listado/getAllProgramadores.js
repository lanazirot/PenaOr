import { listarProgramadores } from './operaciones.js';

$(document).ready(async () => {
    //Obtenemos todos los programadores
    listarProgramadores();
    //SOF -> Filtrar programadores
    $('#filter').keyup(function () {
        var rex = new RegExp($(this).val(), 'i');
        $('.searchable tr').hide();
        $('.searchable tr').filter(function () {
            return rex.test($(this).text());
        }).show();

    })
});
