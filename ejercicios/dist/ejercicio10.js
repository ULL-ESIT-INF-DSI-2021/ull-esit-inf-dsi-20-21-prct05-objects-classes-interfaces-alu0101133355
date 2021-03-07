"use strict";
/*
Desarrollar la funcion isValidUsername que compruebe la validez de un nombre de usuario
la funcion recibira como parametro una cadena con un nombre de usuario y devolvera verdadero o falso
segun las condiciones del enunciado
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUsername = void 0;
function isValidUsername(username) {
    return /^(?!_)((?=.*[a-z]){1,2}(?=.*[0-9]){1,2}(?=.*[A-Z]){1,2}(?=.*[$\-_]){1,2})(?!.*([A-Za-z0-9_$\-])\2{2})([a-z0-9A-Z$\-_]){4,30}([^_])$/g.test(username);
}
exports.isValidUsername = isValidUsername;
let usuario1 = `u__hello$122__`;
console.log(isValidUsername(usuario1));
let usuario2 = `alu0101133355`;
console.log(isValidUsername(usuario2));
let usuario3 = `JA_t9`;
console.log(isValidUsername(usuario3));
