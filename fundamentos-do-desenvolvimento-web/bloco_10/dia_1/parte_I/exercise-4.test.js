// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require('./exercise-4');

describe('Testa a função myFizzBuzz', () => {
  test('testa se a função recebe um número múltiplo de 3 e de 5 e retorna fizzbuzz', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  })
  test('testa se a função recebe um número múltiplo de 3 e retorna fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })
  test('testa se a função recebe um número múltiplo de 5 e retorna buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz')
  })
  test('testa se a função recebe um número que não é múltiplo de 3 nem de 5 e retorna o próprio número', () => {
    expect(myFizzBuzz(13)).toBe(13);
  })
  test('testa se a função recebe um parâmetro não numérico e retorna false', () => {
    expect(myFizzBuzz('vaiDaRuimEm')).toBeFalsy();
  }) 
}) 