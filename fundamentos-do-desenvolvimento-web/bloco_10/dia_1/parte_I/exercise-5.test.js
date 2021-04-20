// Compare dois objetos (JSON) para verificar se são idênticos ou não

const objs = require('./exercise-5');

const {0: obj1, 1: obj2, 2: obj3} = objs

describe('testa se os objetos são diferentes ou iguais', () => {
  test('testa se o obj1 é igual ao obj2', () => {
    expect(obj1).toEqual(obj2)
  })
  test('testa se o obj1 é diferente do obj3', () => {
    expect(obj1).not.toEqual(obj3);
  })
})