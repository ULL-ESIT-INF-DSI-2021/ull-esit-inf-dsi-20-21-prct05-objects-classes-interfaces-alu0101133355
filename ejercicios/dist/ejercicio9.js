"use strict";
/*
Funcion que recibe el tipo de pokemon que tiene, el tipo
que es su oponente, su capacidad de ataque y la capacidad de defensa
de su oponente. La funcion devolvera como resultado el daño causdado*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego_Pokemon = void 0;
function Juego_Pokemon(local, visitante, ataque_local, defensa_visitante) {
    const muy_efectivo = 50 * (ataque_local / defensa_visitante) * 2;
    const efectividad_normal = 50 * (ataque_local / defensa_visitante);
    const poco_efectivo = 50 * (ataque_local / defensa_visitante) * 0.5;
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
exports.Juego_Pokemon = Juego_Pokemon;
console.log(Juego_Pokemon('fuego', 'electrico', 50, 50));
console.log(Juego_Pokemon('agua', 'fuego', 50, 50));
