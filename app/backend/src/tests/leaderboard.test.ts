import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

describe('Teste da rota leaderboard', () => {
  

  it('Retorno tem que ser 200 quando consulta o ranking de todos os times', async () => {
    const result = await chai.request(app)
    .get('/leaderboard/home')
    chai.expect(result.status).to.equal(200)
  });


});
