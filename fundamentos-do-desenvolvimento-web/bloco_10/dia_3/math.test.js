
// const { test, jest, expect } = require('@jest/globals');
// const { exp } = require('mathjs');
// const { describe } = require('yargs');
const math = require('./math');

describe('testa a função subtrair', () => {
  test('testa se a função subtrair é chamada depois de mockada', () => {
    math.subtrair = jest.fn().mockImplementation((a, b) => a - b);
    math.subtrair(5,1);
    expect(math.subtrair).toHaveBeenCalled();
  });
  test('testa a função subtrair mockada com resultado definido', () => {
    const mockSomar = jest.spyOn(math, "somar").mockReturnValue(20);
    expect(mockSomar(10, 10)).toBe(20);
    expect(mockSomar).toHaveBeenCalledTimes(1);
    math.somar.mockRestore();
    math.somar(8, 5).then(resultado => {
      expect(resultado).toBe(13);
    })
    
  })
})

describe('testa a função multiplicar', () => {
  test('testa a função multiplicar mockada com retorno 10', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    expect(math.multiplicar(2,5)).toBe(10)
    expect(math.multiplicar).toHaveBeenCalled();
  })
})

describe('testa a função somar', () => {
  test('testa a função somar mockada', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    expect(math.somar(5, 1)).toBe(6);
    expect(math.somar).toHaveBeenCalled;
    expect(math.somar).toHaveBeenLastCalledWith(5,1);
  })
})

describe('testa a função dividir', () => {
  test('testa a função dividir mockada', () => {
    math.dividir = jest.fn().mockReturnValue(15).mockReturnValueOnce(2).mockReturnValueOnce(5);
    expect(math.dividir(10, 5)).toBe(2);
    expect(math.dividir(25, 5)).toBe(5);
    expect(math.dividir(150, 10)).toBe(15);
    expect(math.dividir).toHaveBeenCalled();
    expect(math.dividir).toHaveBeenLastCalledWith(150, 10);
    expect(math.dividir).toHaveBeenCalledTimes(3);
  })
})
