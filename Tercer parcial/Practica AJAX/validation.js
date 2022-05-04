/**
 * 
 * @param {String} email - Correo del usuario 
 * @returns true, en caso de que el usuario exista en el localStorage
 */
export function validarExistencia({email}){
    if(localStorage.getItem(email)){
        return true;
    }
    return false;
}