/*
Desarrollar la funcion isValidUsername que compruebe la validez de un nombre de usuario
la funcion recibira como parametro una cadena con un nombre de usuario y devolvera verdadero o falso 
segun las condiciones del enunciado
*/

export function isValidUsername(username: string): boolean {
    return /^(?!_)((?=.*[a-z]){1,2}(?=.*[0-9]){1,2}(?=.*[A-Z]){1,2}(?=.*[$\-_]){1,2})(?!.*([A-Za-z0-9_$\-])\2{2})([a-z0-9A-Z$\-_]){4,30}([^_])$/g.test(username);
  }


  let usuario1: string = `u__hello$122__`
  console.log(isValidUsername(usuario1));

  let usuario2: string = `alu0101133355`
  console.log(isValidUsername(usuario2));

  let usuario3: string = `JA_t9`
  console.log(isValidUsername(usuario3));
