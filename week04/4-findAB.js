function findAB(str) {
    for (let index = 0; index < str.length; index++) {
        if (str[index] === 'a' && str[index + 1] === 'b')
            return [index, index + 1]
    }
}


// [3,4]
console.log(
    findAB('012ab222')
)