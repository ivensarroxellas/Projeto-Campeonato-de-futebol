import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';


chai.use(chaiHttp);

const { expect } = chai;


describe('Teste da rota matches', () => {
  

  it('Retorno tem que ser 200 quando consulta todos os matches', async () => {
    const result = await chai.request(app)
    .get('/matches')
    chai.expect(result.status).to.equal(200)
  });

 /*  it('Retorno tem que ser 200 quando consulta um único time', async () => {
    const result = await chai.request(app)
    .get('/teams/2')
    chai.expect(result.status).to.equal(200)
  }); */

});
