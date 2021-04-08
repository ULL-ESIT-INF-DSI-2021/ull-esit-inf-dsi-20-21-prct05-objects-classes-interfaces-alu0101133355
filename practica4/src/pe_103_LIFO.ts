/**
 * Interface tipo Generica para genere una LIFO
 * PE 103 
 * AUTOR: Javier Martin de Leon
 */

interface LIFOInterface<T> {

    push(element: T): void;

    pop(): void;

    pseek(): T;

    size(): number;

    print(): void;

}

export class Lifo<T> implements LIFOInterface<T> {

  constructor(private array_lifo: T[]) {}


  getarray_lifo(): T[] {
    return this.array_lifo;
  }

/* Añade un element a la pila
*/
  push(element: T): void {
    this.array_lifo.push(element);
  }

/* Extrae el ultimo element insertado en la pila 
*/

  pop():void {
    this.array_lifo.splice(this.array_lifo.length - 1, 1);
  }

/* Visualiza el contenido de la pila
*/
  print(): void {
    console.log('Mostrando nuestra pila duracell');
    for (let index = this.array_lifo.length - 1; index >= 0; index--) {

      console.log(this.array_lifo[index]);

    }
  }
}
