// A função sum(a, b) retorna a soma do parâmetro a com o b
  // Teste se o retorno de sum(4, 5) é 9
  // Teste se o retorno de sum(0, 0) é 0
  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('./exercise-1');

describe('Testa a função sum', () => {
  test('a função recebe 4 e 5 e retorna nove', () => {
    expect(sum(4,5)).toBe(9)
  })
  test('a função recebe 0 e 0 e retorna 0', () => {
    expect(sum(0,0)).toBe(0)
  })
  test('a função lança um erro quando um dos parâmetros é uma string', () => {
    expect(() => {sum(4,'5')}).toThrow()
  })
  test('o erro lançado é parameters must be numbers', () => {
    expect(() => {sum(4,'5')}).toThrowError(new Error ('parameters must be numbers'))
  })
})