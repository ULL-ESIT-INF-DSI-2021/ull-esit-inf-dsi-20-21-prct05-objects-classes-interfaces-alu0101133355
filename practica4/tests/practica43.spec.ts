import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio3';

describe('Función que hace la media entre los números del vector y concatena todas las letras', () => {
  it('(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]) returns value ["3.6", "udiwstagwo"]', () => {
    expect(meanAndConcatenate(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'])).to.be.eql(['3.6', 'udiwstagwo'])
  });
});
