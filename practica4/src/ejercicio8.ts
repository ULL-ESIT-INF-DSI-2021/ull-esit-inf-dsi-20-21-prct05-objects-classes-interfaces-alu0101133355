/**
 * Ejercicio 8 el qagente
 * @param X largo 
 * @param Y ancho
 * @param initialPoint Coordenada inicial 
 * @param endPoint Coordenada final
 * @returns array con coordenadas tomadas para llegar al punto final
 */
export function agent(X: number, Y: number, initialPoint: number[], end_Point: number[]) {
  if ((initialPoint[0] > X) || (initialPoint[1] > Y) || (end_Point[0] > X) || (end_Point[1] > Y)) {
    return "ERROR: La posición inicial o final no puede superar el tamaño del tablero";
  }

  const camino: string[] = [];

  while (initialPoint[0] != end_Point[0]) {
    if (initialPoint[0] < end_Point[0]) {
      camino.push("East");
      initialPoint[0]++;
    }
    if (initialPoint[0] > end_Point[0]) {
      camino.push("West");
      initialPoint[0]--;
    }
  }
  while (initialPoint[1] != end_Point[1]) {
    if (initialPoint[1] < end_Point[1]) {
      camino.push("North");
      initialPoint[1]++;
    }
    if (initialPoint[1] > end_Point[1]) {
      camino.push("South");
      initialPoint[1]--;
    }
  }
  return camino;
}