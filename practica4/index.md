# Javier Martin de Leon practica 4: Arrays, tuplas y enumerados

## Introduccion

Para la realizacion de esta practica se nos pedia la realizacion de 3 ejercicos, los cuales debemos realizar utilizando la [estructura basica de proyecto](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/) que hemos visto en la asignatura y utilizado en anteriores practicas. Destos 3 ejercicios solo pude realizar los dos primeros.

## Pasos previos 

Antes de comenzar los ejercicos deberemos instalar y configurar [Typedoc](https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view) para generar documentacion y por otro lado deberemos instalar y configurar a su vez [Mocha y chai](https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view), para los test unitarios.

## Objetivos 

En cuanto a los objetivos de la práctica 5, se nos pedia resolver una serie de ejercicios de programación que nos permitirian conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript.

### Ejercicio 1: Pokedex

El enunciado nos pedía que a partir de la practica 3 donde desarrollamos un ejercicio relacinado con los Pokemon, teníamos que utilizar la estructura e interfaces que consideraramos oportuna para poder representar el escenario descrito. Se nos pedía crear una pokedex donde se almacene la informacion relacionada con los distintos Pokemons. Para cada Pokemon, se debe almacenar su nombre, peso, altura, tipo y estadisticas. Por ultimo s enos pedia tambien que desarrollaramos una clase combat que debia simular el combate entre dos Pokemons.

Para su realizacion, creamos la clase **Pokedex** la cual nos permite almacenar todos los pokemon. Le introcudcimos a la clase pokedex un objeto tipo **Pokemon** y se quedara almacenado. Dentro de la clase encontramos desarrollados los siguientes metodos:

 -**getPokedex** => Sirve para retornar los pokemons que tengamos guardados
 -**put_Pokemon** => Sirve para añadir un nuevo Pokemon
 -**see_Pokedex** => Sirve para mostrarnos en forma de tabla los pokemons de la pokedex y sus estadisticas.

### Codigo realizado:
```TypeScript
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
```

Continuando con lo pedido en el ejercicio, pasamos a la creacion de la clase **Pokemon**. Desde el constructor de nuestra clase lo que recibimos es el nombre del Pokemon (get_Name), su peso (get_Weight), su altura (get_Height), su tipo (get_pokemon_Type), el ataque (get_basic_data), la desfensa (get_basic_data), su velocidad (get_basic_data) y su vida entera (set_HP).

### Codigo realizado:
```TypeScript
export class Pokemon {
    private BasicData = {
      AT: 0,
      DF: 0,
      VL: 0,
      HP: 0,
    }
    constructor(private name: string, private weight: number, private height: number, private PokType: string, BasicData: [number, number, number, number]) {
      this.BasicData.AT = BasicData[0];
      this.BasicData.DF = BasicData[1];
      this.BasicData.VL = BasicData[2];
      this.BasicData.HP = BasicData[3];
    }
  
    public get_Name() {
      return this.name;
    }
    public get_Weight() {
      return this.weight;
    }
    public get_Height() {
      return this.height;
    }
    public get_pokemon_Type() {
      return this.PokType;
    }
    public get_basic_data() {
      return this.BasicData;
    }
    public set_HP(hp: number) {
      this.BasicData.HP = hp;
    }
  }
```

Para terminar con el ejercicio 1, creamos la clase combat como se nos pedia en el enunciado. Como es logico los parametros que tiene son dos Pokemons diferentes. Tenemos que tener en cuenta que para saber nuestro ganador del combate, tenemos que saber en primer lugar el daño que le hace un Pokemon a otro. El metodo **what_damage** comprueba la efificiencia de ataque sobre el pokemon rival. Como samos en la practica 3 un switch ya con todo el tema de la eficioncia de ataques de los pokemons lo hemos reutilizado como se nos pedia en el enunciado.

### Codigo realizado:
```TypeScript
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
``` 
Por ultimo a continuacion se muestra una imagen con la salida de nuestra prueba del programa:


## Ejercicio 2: Gestor bibliografico

El enunciado nos pedia, que diseñaramos el conjunto de clases e interfaces que considere para representar un gestor bibliográfico. El desarrollo realizado debe tener las siguientes funcionalidades:

**Para cada artículo de investigación habrá que almacenar:**
* Título
* Autor o autores del artículo.
* Email de cada uno de los autores.
* Palabras claves o keywords.
* Resumen o abstract del artículo.
* Fecha de publicación.
* Editorial en la que se publicó el artículo.
* Número de citas: cantidad de veces que el artículo ha sido referenciado en otros trabajos.
* Además, incluya un método que devuelva la referencia del artículo en formato APA para revista electrónica sin DOI.
**El gestor bibliográfico deberá:**
* Almacenar la información de múltiples artículos.
* Mostrar por la consola la información incluida en la base de datos en formato tabla (console.table).
* Permitir llevar a cabo búsquedas de trabajos por palabras claves y mostrar los resultados de la búsqueda en formato de tabla. Además, se deberá poder filtrar por los campos * fecha de publicación, editorial y nombre de autor.
* Permitir la exportación de los resultados de una búsqueda en formato de cita APA.

Para su realizacion comenzamos a desarrollar en primer lugar la clase **Articulo**, que nos servira para crear un objeto de tipo articulo, desde el constructor recibiremos el titulo del artículo (get_title), el autor/autores (get_Autor), el email de los autores (get_gmail), palabras clave (get_Key_words), resumen (get_Resume), fecha de publicación (get_date), la editorial (get_Editorial) y el número de citas (get_appointment). Altener implementados los **getters** y **setters** para cada uno de los atributos mencionados, nos permite que podamos acceder y modificar algun atributoto que especifiquemos. Para terminar, se nos pedia como ultimo requisito de articulo que implementaramos un metodo que devolviera la referencia del articulo en formato APA para revista electronica sin DOI, para ellos hemos desarrollado el metodo **get_APA**.

### Codigo realizado:
```TypeScript
export class Articulo {

  constructor(private title: string, private autor: string[], private gmail: string[], private keywords: string[], private resume: string, private date: number,
              private editorial: string, private appointment: number) {
  }
  /**
   * @returns el title del articulo
   */
  public get_title() {
    return this.title;
  }
  /**
   * @param title nuevo title que queremos asignar
   */
  public set_title(title: string) {
    this.title = title;
  }
  /**
   * @returns el nombre/es del autor/es
   */
  public get_Autor() {
    return this.autor;
  }
  /**
   * @param author nuevo autor que queremos asignar
   */
  public set_Autor(author: string) {
    this.autor.push(author);
  }
  /**
   * @returns  el gmail del autor/es
   */
  public get_gmail() {
    return this.gmail;
  }
  /**
   * @param gmail nuevo title que queremos asignar
   */
  public set_gmail(gmail: string) {
    this.gmail.push(gmail);
  }
  /**
   * @returns la palabra clave del articulo
   */
  public get_Key_words() {
    return this.keywords;
  }
  /**
   * @param keywords nueva palabra clave que queremos asignar
   */
  public set_Key_words(keywords: string) {
    this.keywords.push(keywords);
  }
  /**
   * @returns el resumen del articulo
   */
  public get_Resume() {
    return this.resume;
  }
  /**
   * @param abstract nuevo resume que queremos asignar
   */
  public set_Resume(abstract: string) {
    this.resume = abstract;
  }
  /**
   * @returns la fecha de publicacion del articulo
   */
  public get_date() {
    return this.date;
  }
  /**
   * @param date nueva cita que queremos asignar
   */
  public set_date(date: number) {
    this.date = date;
  }
  /**
   * @returns la editorial donde se publico el articulo
   */
  public get_Editorial() {
    return this.editorial;
  }
  /**
   * @param leader nueva editorial que queremos asignar
   */
  public set_Editorial(leader: string) {
    this.editorial = leader;
  }
  /**
   * @returns el numero de citas que ha tenido el articulo
   */
  public get_appointment() {
    return this.appointment;
  }
  /**
   * @param quote nuevo numero de citas que queremos asignar
   */
  public set_appointment(quote: number) {
    this.appointment = quote;
  }
  /**
   * @returns el articulo en formato APA
   */
  public get_APA() {
    let output: string = "";
    let index = 0;

    this.autor.forEach((element) => {
      if (index == 0) {
        output = element;
      } else if (index > 0) {
        if (index == this.autor.length - 1) {
          output += ` y ${element}`;
        } else {
          output += `, ${element}.`;
        }
      }
      index++;
    });

    output += ` (${this.date}) "${this.title}", ${this.editorial}`;
    return output;
  }
}
```

Para terminar con este ejercicio 2 de la practica 5, desarrollamaos la clase **Bibliografico** la cual utilizamos para guradar los articulos. La clase nos permite filtrar una busqueda con por ejemplo las keywords. En la clase encontramos una serie de metodos desarrollados que son los siguientes:

-**get_Articulos** => Sirve para ver los articulos
-**show_Articulos** => Sirve para mostrar por pantalla el gestor bibliografico en tabla
-**show_title_Autor** => Sirve para mostrar por pantalla el gestor bibliografico en tabla
-**put_Articulos** => Sirve para añadir nuevos articulos
-**search_Articulo** => Sirve para comprobar si aquello que queremos filtrar lo encontramos o no, con una serie de condicionales, los cuales nos ayudan a definir que campo estamos filtrando y ver si en los articulos que hay en nuestra base de conocimiento efectivamente lo encontramos o no 

### Codigo realizado:
```TypeScript
import {Articulo} from './Articulo';

/**
 * Class Bibliografico contiene todos los articulos.
 */
export class Bibliografico {
  /**
   * Constructor de la clase
   * @param articulosGestion Conjunto de articulos
   */
  constructor(private articulosGestion: Articulo[]) {
  }

  /**
   * @returns los articulos que tenemos guardados
   */

  public get_Articulos() {
    return this.articulosGestion;
  }

  public show_Articulos() {
    console.table(this.articulosGestion);
  }

  public show_title_Autor() {
    console.table(this.articulosGestion, ["titulo", "autor"]);
  }

  /**
   * @param articuloNew articulo nuevo que queremos añadir
   */

  public put_Articulos(articuloNew: Articulo) {
    this.articulosGestion.push(articuloNew);
  }

  /**
   * @param keywords Que queremos buscar
   * @param filtrado Por que tipo lo quieres filtrar
   * @returns El articulo/articulos filtrar en formato APA
   */
  public search_Articulo(keywords: string[], filtrado: string[]) {
    const numero: number[] = [];
    for (let i: number = 0; i < keywords.length; i++) {
      for (let j: number = 0; j < this.articulosGestion.length; j++) {
        for (let t: number = 0; t < filtrado.length; t++) {
          if (filtrado[t] == 'keywords') {
            for (let z: number = 0; z < this.articulosGestion[j].get_Key_words().length; z++) {
              if (this.articulosGestion[j].get_Key_words()[z] == keywords[i]) {
                numero.push(j);
              }
            }
          }
          if (filtrado[t] == 'fecha') {
            if (this.articulosGestion[j].get_date().toFixed() == keywords[i]) {
              numero.push(j);
            }
          }
          if (filtrado[t] == 'autor') {
            for (let z: number = 0; z < this.articulosGestion[j].get_Autor().length; z++) {
              if (this.articulosGestion[j].get_Autor()[z] == keywords[i]) {
                numero.push(j);
              }
            }
          }

          if (filtrado[t] == 'editorial') {
            if (this.articulosGestion[j].get_Editorial() == keywords[i]) {
              numero.push(j);
            }
          }
        }
      }
    }
    for (let i = numero.length -1; i >=0; i--) {
      if (numero.indexOf(numero[i]) !== i) numero.splice(i, 1);
    }

    const result: Articulo[] = [];
    while (numero.length > 0) {
      result.push(this.articulosGestion[numero[0]]);
      numero.shift();
    }
    const articulosEncontrados: string[] = [];
    for (let i: number = 0; i < result.length; i++) {
      articulosEncontrados.push(result[i].get_APA());
      console.log(articulosEncontrados[i]);
    }
    return articulosEncontrados;
  }
}
```
Por ultimo a continuacion se muestra una imagen con la salida de nuestra prueba del programa:

## Concluciones

Como conclusion de esta practica, me gustraia comentar que he encontrado bastantes dificualtades a la hora de desarrollar los ejercicios, como resultado de estas solo he conseguido desarrollar 2 de los 3 ejercicios de esta practica. Eran ejercicos bastante curiosos y divertidos a la hora de desarrollaralos y gracias a su realizacion he mejorado aspectos importantes.

## Bibliografia

* Informe de la practica: [Practica 3 - Tipos de datos estaticos y funciones](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/)
* Manual JavaScript: [w3schools.com](https://www.w3schools.com/js/js_string_methods.asp)
* Videos de JavaScript: [Tutoriales](https://www.youtube.com/results?search_query=javascript+desde+cero)
* Git hub pages info: [Git Hub](https://docs.github.com/en/github/working-with-github-pages)
* Informacion de Markdown: [Markdown](https://guides.github.com/features/mastering-markdown/)

