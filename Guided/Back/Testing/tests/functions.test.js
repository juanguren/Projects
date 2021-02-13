
const { 
    returnSum,
    backWord
 } = require('../src/functions');

test('Sum Function', () =>{
    expect(returnSum(5,5)).toMatchObject({
        final: expect.any(Number)
    })
});

test('Should reverse string ', () => {
    const word = "Hola"
    expect(backWord(word)).toEqual('aloH');
});
