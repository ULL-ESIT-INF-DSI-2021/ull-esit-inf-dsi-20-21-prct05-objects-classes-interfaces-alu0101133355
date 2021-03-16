type Point = [number, number];

/**
 * Suma dos puntos bidimensionales coordenada  a coordenada
 * @param point_1 
 * @param point_2 
 * @returns tipo creado Point
 */

export function pointAdd(point_1: Point, point_2: Point): Point {
    let result: Point = [0, 0];
  
    result[0] = point_1[0] + point_2[0];
    result[1] = point_1[1] + point_2[1];
  
    return result;
  }
  
  /**
   * Función que resta dos puntos bidimensionales coordenada a coordenada
   * @param point_1 es un tipo creado Point que define las coordenadas de un punto bidimensional
   * @param point_2 es un tipo creado Point que define las coordenadas de un punto bidimensional
   * @returns retorna un tipo creado Point 
   */
  export function pointDiference(point_1: Point, point_2: Point): Point {
    let result: Point = [0, 0];
    
    result[0] = point_1[0] - point_2[0];
    result[1] = point_1[1] - point_2[1];
    
    return result;
  }
  
  /**
   * Función que calcula el producto de un punto bidimensional por un número
   * @param point es un tipo creado Point que define las coordenadas de un punto bidimensional
   * @param valor contiene el multiplicando
   * @returns retorna un tipo creado Point 
   */
  export function pointProduct(point_1: Point, valor_point: number): Point {
    let result: Point = [0, 0];
  
    result[0] = point_1[0] * valor_point;
    result[1] = point_1[1] * valor_point;
    
    return result;
  }
  
  /**
   * Función que calcula la distancia euclidia entre dos puntos
   * @param point es un tipo creado Point que define las coordenadas de un punto bidimensional
   * @param point2 es un tipo creado Point que define las coordenadas de un punto bidimensional
   * @returns retorna un tipo number con la distnacia euclidia calculada
   */
  export function pointDistance(point_1: Point, point_2: Point): number {
    let result: number;
    
    result = Math.sqrt((point_1[0] - point_2[0])**2 + (point_1[1] - point_2[1])**2);
    
    return result;
  }