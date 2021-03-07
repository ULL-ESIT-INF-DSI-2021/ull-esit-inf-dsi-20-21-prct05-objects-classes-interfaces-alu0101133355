"use strict";
/*
Desarrollar dos funciones fromSnakeToCamelCase y fromCamelToSnakeCase
convierte una cadena de texto de un formato a otro.
fromSnakeToCamelCase => recibe en formato snake y lo devuelve en camel
fromCamelToSnakeCase => operacion adversa
*/
function camelToSnake(string) {
    return string.replace(/[\w]([A-Z])/g, function (m) {
        return m[0] + "_" + m[1];
    }).toLowerCase();
}
function snakeToCamel(string) {
    return string.replace(/(_\w)/g, function (m) {
        return m[1].toUpperCase();
    });
}
let snake = 'lorem_ipsum';
let camel = 'EjemploDeUpperCamelCase';
/*Ejemplo snake a camel*/
console.log(snakeToCamel(snake));
/*Ejemplo camel a snake*/
console.log(camelToSnake(camel));
