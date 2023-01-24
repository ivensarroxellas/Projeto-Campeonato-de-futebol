import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import { ForeignKeyConstraintError } from 'sequelize';

chai.use(chaiHttp);

const { expect } = chai;


describe('Teste da rota teams', () => {
  

  it('Retorno tem que ser 200 quando consulta todos os times', async () => {
    const result = await chai.request(app)
    .get('/teams')
    chai.expect(result.status).to.equal(200)
  });

  it('Retorno tem que ser 200 quando consulta um único time', async () => {
    const result = await chai.request(app)
    .get('/teams/2')
    chai.expect(result.status).to.equal(200)
  });

});
