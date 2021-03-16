import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejercicio4';

describe('Función que mueve los ceros de un array al final del vector', () => {
  it('([1,0,1,2,0,1,3]) returns value ["3.6", "udiwstagwo"]', () => {
    expect(moveZeros([1,0,1,2,0,1,3])).to.be.eql([1,1,2,1,3,0,0])
  });
});