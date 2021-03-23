import 'mocha';
import {expect} from 'chai';
import {Articulo} from '../src/ejercicio2/Articulo';
import {Bibliografico} from '../src/ejercicio2/Biblio';

describe(`Gestor bibliografico`, () => {
  const articulo: Articulo = new Articulo("MEATSP: A Membrane Evolutionary Algorithm for Solving TSP", ["Ping Guo", "Mengliang Hou"], ["alu0101133355@ull.edu.es"], ["heuristic"],
      "In recent years, heuristic intelligent algorithms have achieved rapid development in solving combinatorial optimization problems.",
      1978, "IEEE", 387);

  const biblio = new Bibliografico([]);
  biblio.put_Articulos(articulo);
  

  describe(`Probar llamadas de artículo`, () => {
    it('Titulo del articulo', () => {
      expect(articulo.get_title()).to.be.equal("MEATSP: A Membrane Evolutionary Algorithm for Solving TSP");
    });
    it('Autor/es del articulo', () => {
      expect(articulo.get_Autor()).to.deep.equal(["Ping Guo", "Mengliang Hou"]);
    });
    it('email/s del articulo', () => {
      expect(articulo.get_gmail()).to.deep.equal(["alu0101133355@ull.edu.es"]);
    });
    it('Keywords del articulo', () => {
      expect(articulo.get_Key_words()).to.deep.equal(["heuristic"]);
    });
    it('Fecha del articulo', () => {
      expect(articulo.get_date()).to.be.equal(1978);
    });
    it('Editorial del articulo', () => {
      expect(articulo.get_Editorial()).to.be.equal("IEEE");
    });
    it('Citas del articulo', () => {
      expect(articulo.get_date()).to.be.equal(387);
    });
  });

  describe(`Probar funcionamiento y mostrado por pantalla del Gestor`, () => {
    it('Mostrado de articulos totales', () => {
      biblio.show_Articulos();
    });
    it('Mostrado de los titulos y los autores de todos los articulos', () => {
      biblio.show_title_Autor();
    });
  });

  describe(`Probar funcionamiento y mostrado por pantalla del formato APA`, () => {
    it('Mostrado del articulo 1 en formato APA', () => {
      console.log(`Formato APA del articulo: [${articulo.get_APA()}]`);
    });
  });

  describe(`Probar funcionamiento del buscador`, () => {
    it('Flitrando por clave', () => {
      biblio.search_Articulo(["heuristic"], ["keywords"]);
    });
    it('Flitrando por autor', () => {
      biblio.search_Articulo(["Ping Guo", "Mengliang Hou"], ["autor"]);
    });
  });
});