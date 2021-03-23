
/**Class Articulo cotienen los datos que componen un articulo.
 */

export class Articulo {
  /**
   * Constructor de la clase
   * @param title title del articulo
   * @param autor Autor/es del articulo
   * @param gmail gmail de los autores
   * @param keywords Keywords del articulo
   * @param resume resume del articulo
   * @param date de publicacion del articulo
   * @param editorial Editorial de publicado del articulo
   * @param appointments Numero de appointment que ha tenido el articulo
   */
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