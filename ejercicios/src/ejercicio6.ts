/*
 Definir una funcion isValidISBN que compruebe la validez de un codigo
 isbn10. La funcion recibira como parametro una cadena de caracteres compuesta por 
 un posible codigo isbn10 separado o no por guiones. Como resultado devolvera verdadero o falso.
 */
 function isValidISBN(isbn10: string): boolean {
    let iter: number = 10;
    let suma: number = 0;
    isbn10.replace(/-/g, "").split("").forEach((element: string,
      index: number) => {
      if (element.match(/x/i)) {
        suma = suma + (10 * iter);
      } else {
        suma = suma + (parseInt(element) * iter);
      }
      iter--;
    });
    if (suma % 11 === 0) {
      return true;
    } else {
      return false;
    }
  }

  /*Ejemplos enunciado*/
  let ejemplo1: string = `3-598-21507-X`
  console.log(isValidISBN(ejemplo1));

  let ejemplo2: string = `3-598-21508-X`
  console.log(isValidISBN(ejemplo2));
  
  