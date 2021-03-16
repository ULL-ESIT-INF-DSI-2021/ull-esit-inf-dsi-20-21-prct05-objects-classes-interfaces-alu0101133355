import 'mocha';
import {expect} from 'chai';
import {nPointAdd} from '../src/ejercicio7';
import {nPointDiference} from '../src/ejercicio7';
import {nPointProduct} from '../src/ejercicio7';
import {nPointDistance} from '../src/ejercicio7';

describe('Función que suma dos puntos n-dimensionales coordenada a coordenada', () => {
  it('([2, 3, 3, 5, 8, 8], [3, 4, 4, 7, 5, 5]) returns value [ 5, 7, 7, 12, 13, 13 ]', () => {
    expect(nPointAdd([2, 3, 3, 5, 8, 8], [3, 4, 4, 7, 5, 5])).to.be.eql([ 5, 7, 7, 12, 13, 13 ])
  });
});

describe('Función que resta dos puntos n-dimensionales coordenada a coordenada', () => {
  it('([2, 3, 4, 6], [3, 4, 4, 6]) returns value [ -1, -1, 0, 0 ]', () => {
    expect(nPointDiference([2, 3, 4, 6], [3, 4, 4, 6])).to.be.eql([ -1, -1, 0, 0 ])
  });
});

describe('Función que calcula el producto de un punto n-dimensional por un número', () => {
  it('([2, 3, 4, 5, 7], 3) returns value [ 6, 9, 12, 15, 21 ]', () => {
    expect(nPointProduct([2, 3, 4, 5, 7], 3)).to.be.eql([ 6, 9, 12, 15, 21 ])
  });
});

describe('Función que calcula la distancia euclidia entre dos puntos', () => {
  it('([2, 3, 6], [3, 4, 5]) returns value 1.7320508075688772', () => {
    expect(nPointDistance([2, 3, 6], [3, 4, 5])).to.be.eql(1.7320508075688772)
  });
});