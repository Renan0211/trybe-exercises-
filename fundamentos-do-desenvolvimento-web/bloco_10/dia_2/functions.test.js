const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}
test('se uppercase teste é igual à TESTE', (done) => {
  uppercase('teste', (str) => {
    expect(str).toBe('TESTE')
    done();
  })
})