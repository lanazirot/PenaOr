const addProgramador = async programador => {
    const fetchData = await fetch(`api/gateway/add.php`, {
        method: 'POST',
        body: JSON.stringify(programador),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const { code, message } = await fetchData.json();
    Swal.fire(code === 200 ? 'Exito' : 'Oops!', message, code === 200 ? 'success' : 'error')
        .then(() => {
            if (code === 200) { //Si fue exitoso
                $('#resetForm').click();
            } //Sino, dejalo que corrija.
        });
}

export default addProgramador;