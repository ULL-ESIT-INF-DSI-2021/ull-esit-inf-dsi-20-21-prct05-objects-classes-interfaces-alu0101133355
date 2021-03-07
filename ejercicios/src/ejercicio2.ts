/**
  Definir dos funciones decimalToFactorial y factorialToDecimal. 
 decimalToFactorial -> recibe un entero positivo y devolvera como resultado una cadena de texto con 
 la representacion en factorial del numero 
 factorialToDecimal -> realiza la operacion adversa 
 */

/*FUNCION QUE NOS PERMITE CALCULAR EL FACTORIAL DE UN NUMERO ENTERO*/
 function factorizar(num: number): number {  

    if (num < 0) {

        return -1;
    
    } else if (num === 0){
        return 1;
    } else {
        return (num * factorizar(num -1));
    }
 }

 /* DESARROLLO FUNCION decimalToFactorial */

 function decimalToFactorial(num_decimal: number): string {
     let iter: number = 1;
     let result: string = "";
     while (num_decimal != 0) {
        result = (num_decimal % iter).toString() + result;
        num_decimal = Math.floor(num_decimal / iter);
        iter++;
     }
     return result
 }

 /* DESARROLLO FUNCION factorialToDecimal*/

 function factorialToDecimal (num_factorial: string): number {

    let result: number = 0;
    let pos: number = num_factorial.length -1;
    num_factorial.split("").map((letter: string, index: number) => {
    result = result + (parseInt(letter) * factorizar(pos));
    --pos;
    });
    return result;
 }

 /*Ejemplo de decimal a factorial*/
 console.log(`El numero 67839 de decimal a factorial es: ${decimalToFactorial(67839)}`);

 /*Ejemplo de factorial a decimal*/
 console.log(`El numero 45678 de decimal a factorial es: ${factorialToDecimal("45678")}`);

