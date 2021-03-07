"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calc_ip = void 0;
/*
Funcion que reciba como parametros dos cadenas y devuelva un
valor numerico que represente el numero de ips disponibles en
el rango correspondiente
 */
function Ip_Disponible(ips) {
    const splitIp = ips.split(".");
    return ((((((+splitIp[0]) * 256) + (+splitIp[1])) * 256) +
        (+splitIp[2])) * 256) + (+splitIp[3]);
}
function Calc_ip(inicio_ip, fin_ip) {
    return Ip_Disponible(fin_ip) - Ip_Disponible(inicio_ip);
}
exports.Calc_ip = Calc_ip;
console.log(Calc_ip("10.0.0.0", "10.0.1.0"));
