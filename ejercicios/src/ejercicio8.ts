/*
Funcion que reciba como parametros dos cadenas y devuelva un 
valor numerico que represente el numero de ips disponibles en 
el rango correspondiente 
 */
 function Ip_Disponible(ips: string): number {
    const splitIp: string[] = ips.split(".");
    return ((((((+splitIp[0]) * 256) + (+splitIp[1])) * 256) +
      (+splitIp[2])) * 256) + (+splitIp[3]);
  }
  export function Calc_ip(inicio_ip: string, fin_ip: string): number {
    return Ip_Disponible(fin_ip) - Ip_Disponible(inicio_ip);
  }
  
  console.log(Calc_ip("10.0.0.0", "10.0.1.0"));
