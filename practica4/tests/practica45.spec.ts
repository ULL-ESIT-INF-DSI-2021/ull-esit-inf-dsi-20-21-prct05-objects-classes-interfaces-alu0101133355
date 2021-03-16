import 'mocha';
import {expect} from 'chai';
import {multiplyAll} from '../src/ejercicio5';

describe('Función que multiplica cada elemento de un array por un atributo de tipo number', () => {
  it('([2, 6, 8])(3)) returns value [6, 18, 24]', () => {
    expect(multiplyAll([2, 6, 8])(3)).to.be.eql([6, 18, 24])
  });
});