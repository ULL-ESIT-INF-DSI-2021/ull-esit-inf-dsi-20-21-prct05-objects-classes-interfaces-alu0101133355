import 'mocha';
import {expect} from 'chai';
import {pointAdd} from '../src/ejercicio6';
import {pointDiference} from '../src/ejercicio6';
import {pointProduct} from '../src/ejercicio6';
import {pointDistance} from '../src/ejercicio6';

describe('Función que calcula la distancia euclidia entre dos puntos', () => {
    it('([2, 3], [3, 4]) returns value [6, 9]', () => {
      expect(pointDistance([2, 3], [3, 4])).to.be.eql(1.4142135623730951)
    });
  });

  
describe('Función que resta dos puntos bidimensionales coordenada a coordenada', () => {
  it('([2, 3], [3, 4]) returns value [-1, -1]', () => {
    expect(pointDiference([2, 3], [3, 4])).to.be.eql([-1, -1])
  });
});


describe('Función que suma dos puntos bidimensionales coordenada a coordenada', () => {
    it('([2, 3], [3, 4]) returns value [5, 7]', () => {
      expect(pointAdd([2, 3], [3, 4])).to.be.eql([5, 7])
    });
  });

describe('Función que calcula el producto de un punto bidimensional por un número', () => {
  it('([2, 3], 3) returns value [6, 9]', () => {
    expect(pointProduct([2, 3], 3)).to.be.eql([6, 9])
  });
});

