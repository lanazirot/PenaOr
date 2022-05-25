$(document).ready(() => {
    const formBuscarPorId = $('#formBuscarPorId');
    const formGeneral = $('#formEmpleados');

    formBuscarPorId.on('submit', async (event) => {
        event.preventDefault();
        const entries = Object.fromEntries(new FormData(event.target));
        const { buscarPorId } = entries;
        const fetchData = await fetch(`api/gateway/getById.php?id=${buscarPorId}`);
        const { code, data, message } = await fetchData.json();
        if (code === 200) {
           $.each(data, (key, value) => {
                formGeneral.find("input[name='" + key + "']").val(value);
                formGeneral.find("select[name='" + key + "']").val(value);
                formGeneral.find("textarea[name='" + key + "']").val(value);
                formGeneral.find("input[name='" + key + "']").prop('checked', value);
            })
        } else {
            Swal.fire('Oops!', message, 'error');
        }
    });
});