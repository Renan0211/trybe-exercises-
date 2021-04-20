// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  // Verifique se o array passado por parâmetro não sofreu alterações
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

  const myRemove = require('./exercise-2');

  describe('Testa a função myRemove', () => {
    test('testa se a função tira um elemento de um array', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    test('testa se a função não retorna o mesmo array', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
      test('testa se o array passado não sofre alterações', () => {
      const arrforTest = [1, 2, 3, 4];
      const doesntMatter = myRemove(arrforTest, 2);
      expect(arrforTest).toEqual([1, 2, 3, 4]);
    })
    test('testa se ao passar um elemento não contido no array retorna o mesmo array', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
  })