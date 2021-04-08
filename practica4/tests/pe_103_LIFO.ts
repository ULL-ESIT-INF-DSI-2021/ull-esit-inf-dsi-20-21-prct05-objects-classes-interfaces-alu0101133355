import 'mocha';
import {expect} from 'chai';
import {Lifo} from '../src/pe_103_LIFO';

describe('Comprobaciones de los ejercicios PE103', () => {

    it('Se comprueba que push funciona correctamente.', () => {
        Lifo2.push(5);
        expect(Lifo2.getArrayLifo()).to.eql([1, 2, 3, 4, 5]);  
    });

    it('Se comprueba que pop funciona correctamente.', () => {
      Lifo2.pop();
      expect(Lifo2.getArrayLifo()).not.eql([1, 2, 3, 4, 5]);
      expect(Lifo2.getArrayLifo()).to.eql([1, 2, 3, 4]);
    });
});
