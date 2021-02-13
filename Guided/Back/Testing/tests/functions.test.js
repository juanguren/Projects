
const { 
    returnSum,
    backWord
 } = require('../src/functions');

test('Sum Function', () =>{
    expect(returnSum(5,5)).toMatchObject({
        final: expect.any(Number)
    })
});
