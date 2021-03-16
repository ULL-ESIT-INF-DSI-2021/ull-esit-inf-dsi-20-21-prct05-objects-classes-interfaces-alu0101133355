/**
 * dDesarrollar la funcion multiplyAll que tome como parametro un array de numeros y devuelve como resultado
 * otra funcion multiply que devuelve un array nuevo que es el resultado de la multiplicacion de los numeros del array
 * por el valor numerico que recibe la segunda funcion
 * @param array 
 * @returns 
 */
export function multiplyAll(array: number[]): Function {
    let array_1: number[] = []
    
    /**
     * Función que multiplica cada elemento de un array por un atributo de tipo number
     * @param valor es una variable tipo number con el número que sirve de multiplicando.
     * @returns retorna un array de numeros con los valores multiplicados
     */
    function multi(valor: number): number[] { 
      for (let i = 0; i < array.length; i++)
        array_1.push(array[i] * valor);
      return array_1; 
    }
  
    return multi
  }