"use strict";
/**
  Crear una funcion isleapYear que devuelva si un años en concreto
 es bisiesto o no. La funcion recibe como parametro el año a evaluar
 y devuelve true o false segun corresponda
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.isleapYear = void 0;
function isleapYear(year) {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) {
        return true;
    }
    else
        return false;
}
exports.isleapYear = isleapYear;
console.log(isleapYear(2020));
