/*
Definir una funcion en mi caso Siguiente_number recibe 
como parametro un entero positivo y devuelva el siguiente
numero mayor que pueda ser formado al reposicionar sus digitos*/

function Siguiente_Mayor(inicial: number): number {
    const cut_String: string[] = inicial.toString().split("");
    const len: number = cut_String.length;

    let i: number;
    for (i = len - 1; i > 0; --i) {
        if (parseInt(cut_String[i]) > parseInt(cut_String[i - 1])) {
            break;
        }
    }
    if (i === 0) {
        return -1;
    } else {
        const menor: number = parseInt(cut_String[i - 1]);
        let minimun: number = i;
        for (let j = i + 1; j < len; ++j) {
            if (parseInt(cut_String[j]) > menor &&
                parseInt(cut_String[j]) < parseInt(cut_String[minimun])) {
                minimun = j;
            }
        }
        [cut_String[i - 1], cut_String[minimun]] =
            [cut_String[minimun], cut_String[i - 1]];

        const result: number = parseInt(cut_String.slice(0, i)
            .concat(cut_String.slice(i, len).sort()).join().replace(/,/g, ""));
        return result;
    }
}
let inicial1: number = 7895;
console.log(Siguiente_Mayor(inicial1));

let inicial2: number = 35;
console.log(Siguiente_Mayor(inicial2));

let inicial3: number = 531;
console.log(Siguiente_Mayor(inicial3));

