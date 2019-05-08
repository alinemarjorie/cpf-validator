const { expect } = require('chai');
const { cpfValidator } = require('../index.js');

describe('Verificar se o cpf é válido e retorna true se for', () => {
  it('Retornar true para um cpf válido ("421.774.935-01")', () => {
    expect(cpfValidator('421.774.935-01')).to.equal(true);
  });
});

describe('Verificar se o cpf é válido e retorna false se não for', () => {
  it('Retornar false para um cartão de crédito inválido ("421.666.666-01")', () => {
    expect(cpfValidator('421.666.666-01')).to.equal(false);
  });
  it('Retornar false caso todos os números sejam iguais ("000.000.000-00")', () => {
    expect(cpfValidator('000.000.000-00')).to.equal(false);
  });
  it('Retornar false caso o CPF tenha menos de 11 dígitos ("364.571.689-2")', () => {
    expect(cpfValidator('364.571.689-2')).to.equal(false);
  });
  it('Retornar false caso a string esteja vazia ("")', () => {
    expect(cpfValidator('')).to.equal(false);
  });
});
