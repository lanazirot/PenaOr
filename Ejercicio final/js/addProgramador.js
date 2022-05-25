const addProgramador = async programador => {
    const fetchData = await fetch(`api/gateway/add.php`, {
        method: 'POST',
        body: JSON.stringify(programador),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const { code, message } = await fetchData.json();
    Swal.fire(code === 200 ? 'Exito' : 'Oops!', message, code === 200 ? 'success' : 'error');
}

export default addProgramador;