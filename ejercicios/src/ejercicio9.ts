/*
Funcion que recibe el tipo de pokemon que tiene, el tipo 
que es su oponente, su capacidad de ataque y la capacidad de defensa 
de su oponente. La funcion devolvera como resultado el daño causdado*/


export function Juego_Pokemon(local: string, visitante: string, ataque_local: number, defensa_visitante: number) {
    const muy_efectivo: number = 50 * (ataque_local / defensa_visitante) * 2;
    const efectividad_normal: number = 50 * (ataque_local / defensa_visitante);
    const poco_efectivo: number = 50 * (ataque_local / defensa_visitante) * 0.5;
  
  
    if (local === 'fuego') {
      if (visitante === 'fuego') {
        return poco_efectivo;
      }
      if (visitante === 'hierba') {
        return muy_efectivo;
      }
      if (visitante === 'agua') {
        return poco_efectivo;
      }
      if (visitante === 'electrico') {
        return efectividad_normal;
      }
    }
  
    if (local === 'agua') {
      if (visitante === 'agua') {
        return poco_efectivo;
      }
      if (visitante === 'fuego') {
        return muy_efectivo;
      }
      if (visitante === 'hierba') {
        return poco_efectivo;
      }
      if (visitante === 'electrico') {
        return efectividad_normal;
      }
    }
    if (local === 'hierba') {
      if (visitante === 'hierba') {
        return poco_efectivo;
      }
      if (visitante === 'fuego') {
        return poco_efectivo;
      }
      if (visitante === 'agua') {
        return muy_efectivo;
      }
      if (visitante === 'electrico') {
        return efectividad_normal;
      }
    }
    if (local === 'electrico') {
      if (visitante === 'electrico') {
        return poco_efectivo;
      }
      if (visitante === 'fuego') {
        return efectividad_normal;
      }
      if (visitante === 'agua') {
        return muy_efectivo;
      }
      if (visitante === 'hierba') {
        return efectividad_normal;
      }
    }
  }
  
  console.log(Juego_Pokemon('fuego', 'electrico', 50, 50));
  console.log(Juego_Pokemon('agua', 'fuego', 50, 50));
  