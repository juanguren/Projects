

const { 
    backWord
} = require('../src/function2');

test('Should reverse string ', () => {
    const word = "Hola"
    expect(backWord(word).toEqual('aloH'));
})