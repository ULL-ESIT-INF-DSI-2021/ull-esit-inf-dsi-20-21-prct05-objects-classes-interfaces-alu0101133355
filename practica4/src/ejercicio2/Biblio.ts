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