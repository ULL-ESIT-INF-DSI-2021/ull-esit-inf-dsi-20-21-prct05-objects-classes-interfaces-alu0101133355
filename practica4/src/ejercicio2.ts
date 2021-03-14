/**
 * Desarrollar una funcion meshArray para comprobar si las cadenas 
 * del array estan encadenadas o no
 * @param array de string con las palabras 
 * @returns un string con las palabras encadenadas o con un msg de error
 */
export function meshArray(array: string[]): string {
    let str: string = '';
  
    for(let i = 0; i < array.length - 1; i++) {
      const palabra: string = array[i];
      const palabra_next: string = array[i + 1];
      let posicion: number = palabra.length -1;
      let posicion_next: number = 0;
      
      while (palabra[posicion] != palabra_next[posicion_next]) {
        posicion--;
        if (posicion < 0) {
          return 'Error al encadenar';
        } 
      }
  
      for(let j: number = posicion; j < palabra.length; j++) {
        if(palabra[j] == palabra_next[posicion_next]) {
          str = str + palabra[j];
          posicion_next++;
        }
        else {
          return 'Error al encadenar';
        }
      }
    }
    return str;
  }