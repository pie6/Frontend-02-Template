const str = 'cba'

function findA(str) {
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            return i
        }
    }
}
console.log(
    findA(str)
)