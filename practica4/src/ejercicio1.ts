/**
 * Desarrollar la funcion decodeResistor, para el calculo del valor de una resistencia segun suscolores
 * @param cadena con los colores
 * @returns valor de la resistencia
 */
export function decodeResistor(cadena: string): number {
    let color1 : string = '';
    let color2 : string = '';
    let valor: number = 0;
    let array = cadena.toLocaleLowerCase().split('-');
    let number = ['0', '1', '2', '3', '4', '5', '6', '7' ,'8', '9'];
    let color = ['negro', 'marrón', 'rojo', 'naranja', 'amarilla', 'verde', 'azul', 'violeta', 'gris', 'blanco'];
  
    for (let i = 0; i < color.length; i++) {
      if (array[0] == color[i])
        color1 = number[i];
    }
  
    for (let i = 0; i < color.length; i++) {
      if (array[1] == color[i])
        color2 = number[i];
    }
  
    color1 = color1 + color2;
    valor = +color1;
  
    return valor;
  }