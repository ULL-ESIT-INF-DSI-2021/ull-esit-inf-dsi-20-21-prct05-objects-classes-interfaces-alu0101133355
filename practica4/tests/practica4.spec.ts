import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio1'

describe('funcion que calcula el valor una resistencia segun sus colores', () => {

    it('decodeResistor("negro-negro") returns value 0', () => {
        expect(decodeResistor('negro-negro')).to.be.equal(0)


    });

    it('decodeResistor("marrón-negro") returns value 10', () => {
        expect(decodeResistor('marrón-negro')).to.be.equal(10)


    });
});