
const {uppercase, findUserById, getUserName} = require('./functions')

test('se uppercase teste é igual à TESTE', (done) => {
  uppercase('teste', (str) => {
    expect(str).toBe('TESTE')
    done();
  })
})


describe('when the user is found by the id', () => {
  test('if is returned the right user', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toBe('Mark');
    })
  })
})

describe('whent the users id doesnt exist', () => {
  test('return an error', () => {
    expect.assertions(1);
    return getUserName(8).catch(error => {
      expect(error).toEqual({error: 'User with 8 not found.'})
    })
  })
})