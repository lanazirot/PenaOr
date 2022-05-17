/**
 */
$(document).ready(()=>{

    Promise.resolve(fetch('https://jsonplaceholder.typicode.com/users')).then(value=> {
        return value.json();
    }).then(value=>{
        const users = value;
        const user = users[0];
        const { name, email, website } = user;
        $('#nombre').val(name);
        $('#email').val(email);
        $('#detalles').val(`Sitio web: ${website}`);
    }).catch(console.log);
    
});