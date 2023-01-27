import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';


chai.use(chaiHttp);


describe('Teste da rota matches', () => {
  

  it('Retorno tem que ser 200 quando consulta todos os matches', async () => {
    const result = await chai.request(app)
    .get('/matches')
    chai.expect(result.status).to.equal(200)
  });

  it('Retorno tem que ser 200 quando consulta todos os matches que estão acontecendo', async () => {
    const result = await chai.request(app)
    .get('/matches?inProgress=true')
    chai.expect(result.status).to.equal(200)
  });

  it('Retorno tem que ser 200 quando consulta todos os matches que já acabaram', async () => {
    const result = await chai.request(app)
    .get('/matches?inProgress=false')
    chai.expect(result.status).to.equal(200)
  });

});
