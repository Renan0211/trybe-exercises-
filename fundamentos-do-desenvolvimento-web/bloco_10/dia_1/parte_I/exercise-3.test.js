// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  // Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const myRemoveWithoutCopy = require('./exercise-3');

describe('Testa a função myRemoveWithoutCopy', () => {
  test('testa se a função tira um elemento de um array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  test('testa se a função não retorna o mesmo array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
    test('testa se o array passado não sofre alterações', () => {
    const arrforTest = [1, 2, 3, 4];
    const doesntMatter = myRemoveWithoutCopy(arrforTest, 2);
    expect(arrforTest).not.toEqual([1, 2, 3, 4]);
  })
  test('testa se ao passar um elemento não contido no array retorna o mesmo array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})