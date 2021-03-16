export function meanAndConcatenate(array: string[]): string[] {
    let cadnum1: string = '0123456789'
    let cadena2 : string = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    let number: number = 0;
    let aux: string = '';
    let array2 = ['', ''];
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (cadnum1.search(array[i]) != -1) {
        number = number + +array[i];
        count++;
      }  
      if (cadena2.search(array[i]) != -1)
        aux = aux + array[i];
    }
    
    number = number / count;
    
    array2[0] = String(number);
    array2[1] = aux;
  
    return array2;
  }