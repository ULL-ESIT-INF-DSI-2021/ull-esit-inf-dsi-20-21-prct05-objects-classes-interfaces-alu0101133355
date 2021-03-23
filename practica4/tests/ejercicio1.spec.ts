import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio1/pokemon';
import {Pokedex} from '../src/ejercicio1/pokedex';
import {Combat} from '../src/ejercicio1/combat';

describe(`EJ 1 - POKEDEX`, () => {
  const Electrode: Pokemon = new Pokemon("Electrode", 66.6, 1.2, "electrico", [50, 70, 150, 60]);
  const Marowak: Pokemon = new Pokemon("Marowak", 45, 1, "fuego", [80, 110, 45, 60]);
  const Starmie: Pokemon = new Pokemon("Starmie", 80, 1.1, "agua", [75, 85, 115, 60]);
  const Sceptile: Pokemon = new Pokemon("Sceptile", 52.2, 1.7, "hierba", [85, 65, 120, 70]);


  const pokedex = new Pokedex([]);
  pokedex.put_Pokemon(Electrode);
  pokedex.put_Pokemon(Marowak);
  pokedex.put_Pokemon(Starmie);
  pokedex.put_Pokemon(Sceptile);

  const combatePrincipal = new Combat(Electrode, Starmie);

  describe(`Probar llamadas de los datos de un pokemon`, () => {
    it('Nombre Pokemon', () => {
      expect(Starmie.get_Name()).to.be.equal("Starmie");
    });
    it('Peso Pokemon', () => {
      expect(Starmie.get_Weight()).to.be.equal(80);
    });
    it('Altura Pokemon', () => {
      expect(Starmie.get_Height()).to.be.equal(1.1);
    });
    it('Tipo Pokemon', () => {
      expect(Starmie.get_pokemon_Type()).to.be.equal("agua");
    });
    it('Ataque Pokemon', () => {
      expect(Starmie.get_basic_data().AT).to.be.equal(75);
    });
    it('Defensa Pokemon', () => {
      expect(Starmie.get_basic_data().DF).to.be.equal(85);
    });
    it('Velocidad Pokemon', () => {
      expect(Starmie.get_basic_data().VL).to.be.equal(115);
    });
    it('Vida Pokemon', () => {
      expect(Starmie.get_basic_data().HP).to.be.equal(60);
    });
  });

  describe(`Probar mostrado de la pokedex en formato tabla`, () => {
    it('Se puede crear un tipo pokedex', () => {
      expect(pokedex.getPokedex()).not.to.be.equal(null);
    });
    it('Todos los pokemon de la pokedex', () => {
      pokedex.see_Pokedex();
    });
  });

  describe('Probar llamada a un objeto de la clase Combat', () => {
    it('Combate principal', () => {
      expect(combatePrincipal.who_Combat()).to.be.equal(`El combate es entre Electrode y Starmie`);
    });
    it('QUE EMPIECE EL COMBATE!', () => {
      expect(combatePrincipal.start()).to.be.equal(`Electrode`);
    });
  });
});