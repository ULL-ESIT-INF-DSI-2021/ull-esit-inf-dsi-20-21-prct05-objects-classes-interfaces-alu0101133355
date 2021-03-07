"use strict";
/*
Definir una funcion en mi caso Siguiente_number recibe
como parametro un entero positivo y devuelva el siguiente
numero mayor que pueda ser formado al reposicionar sus digitos*/
function Siguiente_Mayor(inicial) {
    const cut_String = inicial.toString().split("");
    const len = cut_String.length;
    let i;
    for (i = len - 1; i > 0; --i) {
        if (parseInt(cut_String[i]) > parseInt(cut_String[i - 1])) {
            break;
        }
    }
    if (i === 0) {
        return -1;
    }
    else {
        const menor = parseInt(cut_String[i - 1]);
        let minimun = i;
        for (let j = i + 1; j < len; ++j) {
            if (parseInt(cut_String[j]) > menor &&
                parseInt(cut_String[j]) < parseInt(cut_String[minimun])) {
                minimun = j;
            }
        }
        [cut_String[i - 1], cut_String[minimun]] =
            [cut_String[minimun], cut_String[i - 1]];
        const result = parseInt(cut_String.slice(0, i)
            .concat(cut_String.slice(i, len).sort()).join().replace(/,/g, ""));
        return result;
    }
}
let inicial1 = 7895;
console.log(Siguiente_Mayor(inicial1));
let inicial2 = 35;
console.log(Siguiente_Mayor(inicial2));
let inicial3 = 531;
console.log(Siguiente_Mayor(inicial3));
