import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio2'

describe('funcion que detecta si hay palabras concatenadas', () => {

    it('(["allow", "lowering", "ringmaster", "terror"]) returns value lowringter',() => {
        expect(meshArray(['allow', 'lowering', 'ringmaster', 'terror'])).to.be.eql('lowringter')


    });
});