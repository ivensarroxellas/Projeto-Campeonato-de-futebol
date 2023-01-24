import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste da rota login', () => {
  
  const Date = {
    email: 'user@user.com',
    password: 'secret_user'
  }

  it('Retorno tem que ser 400 caso o parametro email seja vazio', async () => {
    const result = await chai.request(app)
    .post('/login')
    .send({ ...Date, email: undefined })
    chai.expect(result.status).to.equal(400)
    chai.expect(result.body.message).to.equal('All fields must be filled')
  });

  it('Retorno tem que ser 400 caso o parametro senha seja vazio', async () => {
    const result = await chai.request(app)
    .post('/login')
    .send({ ...Date, password: undefined })
    chai.expect(result.status).to.equal(400)
    chai.expect(result.body.message).to.equal('All fields must be filled')
  });

  it('Retorno tem que ser 401 caso o parametro email seja inválido com os dados do banco de dados', async () => {
    const result = await chai.request(app)
    .post('/login')
    .send({ ...Date, email: 'fake@fake.com' })
    chai.expect(result.status).to.equal(401)
    chai.expect(result.body.message).to.equal('Incorrect email or password')
  });

  it('Retorno tem que ser 401 caso o parametro senha seja inválido com os dados do banco de dados', async () => {
    const result = await chai.request(app)
    .post('/login')
    .send({ ...Date, password: 'aaaaaa78785' })
    chai.expect(result.status).to.equal(401)
    chai.expect(result.body.message).to.equal('Incorrect email or password')
  });
});
