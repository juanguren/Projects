
const returnSum = (a, b) =>{
    const num = Math.random()*10;
    const result = (a+b)*num;
    return {
        final: Math.round(result)
    }
}

module.exports = {
    returnSum
};