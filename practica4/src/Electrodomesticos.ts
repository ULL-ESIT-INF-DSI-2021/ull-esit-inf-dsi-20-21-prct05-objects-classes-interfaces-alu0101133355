/**
 * type ColorType = 'white' | 'black' | 'red' | 'blue' | 'grey';

abstract class Electrodomesticos {


    private name : string;
    private peso : Number;
    private precio : Number = 150;


    constructor(name: string, peso: number,precio: 150, private color: ColorType) {
    
    this.name = name;
    this.peso = peso;
    }
    
    getPeso(){
        return this.peso;
    }
    getName(){
        return this.name;
    }
 
    getColor(){
        return this.color;
    }
    setColor(color: ColorType) {
      this.color = color;
    }
  
  }
  
  class Lavadora extends Electrodomesticos {

    private carga: number = 5;

    constructor(name: string, peso: number,precio: number = 150, private color: ColorType, ) {
    }
  
  class Televisor extends  Electrodomesticos{

    private resolucion: number = 20;
    private smartv: boolean;


  }
*/





