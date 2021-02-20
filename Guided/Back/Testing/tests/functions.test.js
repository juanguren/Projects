
const { 
    returnSum,
    backWord,
    objectTest
 } = require('../src/functions');

 //https://zellwk.com/blog/endpoint-testing/

test('Sum Function', () =>{
    expect(returnSum(5,5)).toMatchObject({
        final: expect.any(Number)
    })
});

test('Should reverse string ', () => {
    const word = "Hola";
    expect(backWord(word)).toEqual('aloH');
});

test('Should return object with a number divided by 2', () => {
    expect(objectTest(100)).toMatchObject({
        added: 50,
        type: expect.any(String)
    });
});
