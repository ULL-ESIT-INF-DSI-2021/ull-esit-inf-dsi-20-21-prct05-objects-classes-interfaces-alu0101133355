/**
 * Desarrollar la funcion meanAndConcatenare que debe devolver la media de los valores numericos 
 * y una cadena resultado de la concatenacion de caracteres del array recibido
 * @param array 
 * @returns array2
 */
export function meanAndConcatenate(array: string[]): string[] {
    let cadnum_1: string = '0123456789'
    let cadena_2 : string = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    let number: number = 0;
    let aux: string = '';
    let array_2 = ['', ''];
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (cadnum_1.search(array[i]) != -1) {
        number = number + +array[i];
        count++;
      }  
      if (cadena_2.search(array[i]) != -1)
        aux = aux + array[i];
    }
    
    number = number / count;
    
    array_2[0] = String(number);
    array_2[1] = aux;
  
    return array_2;
  }