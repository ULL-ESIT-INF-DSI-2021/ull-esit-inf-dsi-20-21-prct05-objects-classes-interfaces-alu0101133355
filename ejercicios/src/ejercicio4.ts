/*
Desarrollar dos funciones fromSnakeToCamelCase y fromCamelToSnakeCase
convierte una cadena de texto de un formato a otro. 
fromSnakeToCamelCase => recibe en formato snake y lo devuelve en camel
fromCamelToSnakeCase => operacion adversa
*/
  function camelToSnake(string: string) {
    return string.replace(/[\w]([A-Z])/g, function(m: string) {
      return m[0] + "_" + m[1];
    }).toLowerCase();
  }
  
  function snakeToCamel(string: string) {
    return string.replace(/(_\w)/g, function(m: string) {
      return m[1].toUpperCase();
    });
  }
  let snake: string = 'lorem_ipsum';
  let camel: string = 'EjemploDeUpperCamelCase';


  /*Ejemplo snake a camel*/
  console.log(snakeToCamel(snake));
  /*Ejemplo camel a snake*/
  console.log(camelToSnake(camel));