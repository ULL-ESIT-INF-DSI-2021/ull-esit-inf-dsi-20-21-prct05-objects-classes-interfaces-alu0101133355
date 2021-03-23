import {Pokemon} from '../ejercicio1/pokemon';

export class Combat {
  /**
   * Constructor de la clase
   * @param pokemon_1 
   * @param pokemon_2 
   */
  constructor(private pokemon_1: Pokemon, private pokemon_2: Pokemon) {
  }

  /**
   * Funcion who_Combat para ver entre quien es el combate 
   * @returns los combatientes
   */
  public who_Combat() {
    return (`El combate sera entre ${this.pokemon_1.get_Name()} y ${this.pokemon_2.get_Name()}`);
  }

  /**
   * Daño que hace un pokemon a otro
   * @param attack_pokemon Eleccion de que pokemon hace el ataque
   * @returns El daño que ha hecho el pokemon al otro
   */
  public what_damage(attack_pokemon: number) {
    let pokemon1_effect: number = 0;
    let pokemon2_effect: number = 0;
    let daño: number = 0;
    let dañoInt: number = 0;

    switch (this.pokemon_1.get_pokemon_Type()) {
      case `fuego`: {
        if (this.pokemon_2.get_pokemon_Type() == `hierba`) {
          pokemon1_effect = 2;
          pokemon2_effect = 0.5;
        } else if (this.pokemon_2.get_pokemon_Type() == `agua` || this.pokemon_2.get_pokemon_Type() == `fuego`) {
          pokemon1_effect = 0.5;
          pokemon2_effect = 2;
        } else {
          pokemon1_effect = 1;
          pokemon2_effect = 1;
        }
      } break;

      case `agua`: {
        if (this.pokemon_2.get_pokemon_Type() == `fuego`) {
          pokemon1_effect = 2;
          pokemon2_effect = 0.5;
        } else {
          pokemon1_effect = 0.5;
          pokemon2_effect = 2;
        }
      } break;

      case `hierba`: {
        if (this.pokemon_2.get_pokemon_Type() == `agua`) {
          pokemon1_effect = 2;
          pokemon2_effect = 0.5;
        } else if (this.pokemon_2.get_pokemon_Type() == `fuego` || this.pokemon_2.get_pokemon_Type() == `hierba`) {
          pokemon1_effect = 0.5;
          pokemon2_effect = 2;
        } else {
          pokemon1_effect = 1;
          pokemon2_effect = 1;
        }
      } break;

      case `electrico`: {
        if (this.pokemon_2.get_pokemon_Type() == `agua`) {
          pokemon1_effect = 2;
          pokemon2_effect = 0.5;
        } else if (this.pokemon_2.get_pokemon_Type() == `electrico`) {
          pokemon1_effect = 0.5;
          pokemon2_effect = 2;
        } else {
          pokemon1_effect = 1;
          pokemon2_effect = 1;
        }
      }
    }
    if (attack_pokemon == 0) {
      daño = 50 * (this.pokemon_1.get_basic_data().AT / this.pokemon_2.get_basic_data().DF) * pokemon1_effect;
    } else {
      daño = 50 * (this.pokemon_2.get_basic_data().AT / this.pokemon_1.get_basic_data().DF) * pokemon2_effect;
    }
    dañoInt = Math.round(daño);
    return dañoInt;
  }

  /**
   * Funcion del combate
   * @returns Quien ha ganado el combate
   */
  public start() {
    let attack_pokemon: number = 0;
    let i: number = 0;

    while ((this.pokemon_1.get_basic_data().HP > 0) && (this.pokemon_2.get_basic_data().HP > 0)) {
      console.log(`RONDA ${i}`);
      i++;
    if (attack_pokemon == 0) {
        console.log(`Esta atacando: ${this.pokemon_1.get_Name()}`);
        this.pokemon_2.set_HP((this.pokemon_2.get_basic_data().HP) - this.what_damage(attack_pokemon));
        console.log(`Vida de ${this.pokemon_2.get_Name()} restante: ${this.pokemon_2.get_basic_data().HP} HP.`);
        console.log();
        attack_pokemon++;
      } else {
        console.log(`Esta atacando: ${this.pokemon_2.get_Name()}`);
        this.pokemon_1.set_HP((this.pokemon_1.get_basic_data().HP) - this.what_damage(attack_pokemon));
        console.log(`Vida de ${this.pokemon_1.get_Name()} restante: ${this.pokemon_1.get_basic_data().HP} HP.`);
        console.log();
        attack_pokemon--;
      }
    }
    console.log();
    if (this.pokemon_1.get_basic_data().HP < 0) {
      console.log(`EL GANADOR ES ${this.pokemon_2.get_Name()}!!!`);
      return this.pokemon_2.get_Name();
    } else {
      console.log(`EL GANADOR ES ${this.pokemon_1.get_Name()}!!!`);
      return this.pokemon_1.get_Name();
    }
  }
}