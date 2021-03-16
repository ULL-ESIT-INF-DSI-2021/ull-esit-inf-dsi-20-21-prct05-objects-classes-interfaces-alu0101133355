import 'mocha';
import {expect} from 'chai';
import {agent} from '../src/ejercicio8';

describe('Ejercicio del agente ', () => {
  it('Primera coordenada', () => {
    expect(agent(10, 10, [1, 3], [3, 5])).to.deep.equal(['East', 'East', 'North', 'North']);
  });
  it('Segunda coordenada', () => {
    expect(agent(10, 10, [3, 7], [1, 2])).to.deep.equal(['West', 'West', 'South', 'South', 'South', 'South', 'South']);
  });
});
