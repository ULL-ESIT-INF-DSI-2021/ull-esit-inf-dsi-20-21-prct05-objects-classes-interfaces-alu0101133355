/**
  Crear una funcion isleapYear que devuelva si un años en concreto
 es bisiesto o no. La funcion recibe como parametro el año a evaluar 
 y devuelve true o false segun corresponda
*/

export function isleapYear(year: number): boolean {

     if ((year % 4 === 0 && year % 100 !=0) || (year % 400 === 0)) {

        return true;
     } else
      
      return false;
}

console.log(isleapYear(2020));