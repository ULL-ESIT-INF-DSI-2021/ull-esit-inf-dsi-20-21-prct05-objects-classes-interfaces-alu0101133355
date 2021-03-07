/**
 Validar mensajes, desarrollar una funcion denominada isValid que reciba como parametro
 una cadena compuesta por numeros y letras y determine si es valida. True si lo es 
 */
function isValid(cadena: string): boolean {
  const cadena_vector: Array<string> = ((cadena.split(/[0-9]/g)).splice(1));
  const number_vector: Array<string> = (cadena.split(/[a-z]/g)).filter((letra) => letra.length >= 1);

  let centil: boolean = true;
  let tam: number = 0;
  let indice_gr: number = 0;

  for (let indice = 0; indice < number_vector.length; indice ++) {
    tam = cadena_vector[indice].length;

    if ((parseInt(number_vector[indice])) != tam) {
      centil = false;
      console.log(`La cadena es `);
      return false;
    } else {
      centil = true;
    }
    indice_gr++;
  }
  console.log(`La cadena es `);
  return centil;
}
/*Ejemplo del enunciado*/
console.log(isValid('3say5hello2hi'));
 