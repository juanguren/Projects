
const returnSum = (a, b) =>{
    const num = Math.random()*10;
    const result = (a+b)*num;
    return {
        final: Math.round(result)
    }
}

const backWord = (word) =>{
    const splited = word.split("");
    const reversedSplit = splited.reverse();
    return reversedSplit.join("");
}

const execute = (param) =>{
    const added = Math.floor(param / 2);
    return {
        added
    }
}

const obj = {
    data: (param) => execute(param)
}

const objectTest = (param) =>{
    const result = obj['data'](param);
    return result
}

module.exports = {
    backWord,
    objectTest,
    returnSum
};