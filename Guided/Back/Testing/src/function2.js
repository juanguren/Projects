
const backWord = (word) =>{
    const splited = word.split("");
    const reversedSplit = splited.reverse();
    return reversedSplit.join("");
}

const execute = (param) =>{
    return {
        param
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
    objectTest
};