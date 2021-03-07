/*
 Crear una unica funcion con 4 metodos, lo que quiere chuck
 como resultado es una cadena de caracteres con sus cosas favoritas separadas
 ordenadas, unidas de nuevo y, ademas, que se eliminen todas las apariciones 
 de las letras e y a, cadena vacía = broken!
 */
 function ChuckNorris(plainText: string): string {
    return (plainText === "") ? "Broken!" : plainText.replace(/[ae]/ig, "")
      .split(" ").sort().join();
  }
  
  console.log(ChuckNorris("Beard Jeans Hairbrush Knuckleduster Sand"));
  /*Brd Hirbrush Jns Knuckldustr Snd*/ 
  console.log(ChuckNorris("Sock Beard Vest Lady Sage"));
  /*Brd Ldy Dg Sock Vst*/ 
  console.log(ChuckNorris("Beard Sack Gun Parachute Face-Kicking-Shoes"));
  /*Brd Fc-kicking-Shos Gun Prchut Sck*/ 
  console.log(ChuckNorris("Snot Snow Soda Tank Beard"));
  /*Brd Snot Snow Sod TnK*/
  console.log(ChuckNorris(""));
  /*Broken!*/