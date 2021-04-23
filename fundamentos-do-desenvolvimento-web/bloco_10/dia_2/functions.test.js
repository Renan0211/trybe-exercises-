
const {uppercase, findUserById, getUserName, getRepos, fetch, Animals, findAnimalByName, getAnimal, findAnimalByAge} = require('./functions')


test('se uppercase teste é igual à TESTE', (done) => {
  uppercase('teste', (str) => {
    expect(str).toBe('TESTE')
    done();
  })
})


describe('when the user is found by the id', () => {
  test('return users name', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toBe('Mark');
    })
  })
})

describe('when the user is not found by the id', () => {
  test('return an error', () => {
    expect.assertions(1);
    return getUserName(8).catch(error => {
      expect(error).toEqual({error: 'User with 8 not found.'})
    })
  })
})

describe('when the users id exist', () => {
  it('should return the user name', async () => {
    const userName = await getUserName(5);
    expect(userName).toBe('Paul');
  })
})

describe('when the users id does not exist', () => {
  it('should return an specific error', async () => {
    try {
      await getUserName(0);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 0 not found.'})
    }
  })
})

describe('when getRepos is given an existing url', () => {
  it('should return an arr with the repository names', async () => {
    const tryberRep = await getRepos('https://api.github.com/orgs/tryber/repos');
    const existingRep = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator']
    expect(tryberRep).toEqual(expect.arrayContaining(existingRep))
  })
})

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando função getAnimalByAge', () => {
  test('se retorna um array de objetos quando um animal ou mais possuem a idade especificada', () => {
    const expected = [{ name: 'Soneca', age: 2, type: 'Dog' }];
    const actual = findAnimalByAge(2);
    expect(actual).toEqual(expected);
  })
  test('se retorna uma mensagem de erro quando nenhum animal possue a idade especificada', () => {
    expect(findAnimalByAge(7)).toBe('Nenhum animal com essa idade!')
  })
})