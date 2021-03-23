


import {Pokemon} from '../ejercicio1/pokemon';


export class Pokedex {
  /**
   * Constructor de la clase
   * @param Gestor_Pokemon Conjunto de Pokemon
   */
  constructor(private Gestor_Pokemon: Pokemon[]) {}

  /**
   * Funcion para acceder a la variable privada Gestor_Pokemon
   * @returns los pokemon que tenemos guardados
   */

  public getPokedex() {
    return this.Gestor_Pokemon;
  }

  /**
   * Funcion para añadir un pokemon a la base de datos put_Pokemon
   * @param pokemon nuevo pokemon que quieres añadir
   */

  public put_Pokemon(pokemon: Pokemon) {
    this.Gestor_Pokemon.push(pokemon);
  }


  public see_Pokedex() {
    console.table(this.Gestor_Pokemon, ["name", "weight", "height", "PokType"]);
  }
}