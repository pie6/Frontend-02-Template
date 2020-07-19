function StringToNumber(str) {
    if (typeof str === 'string') {
        return +str
    }
    else {
        return  console.log('NaN')
    }
}

// 8
console.log(StringToNumber('1') + 7)

function NumberToString (num) {
    if (typeof num === 'number') {
        return `${num}`
    }
    else {
        return  console.log('NaN')
    }
}

// 123
console.log(NumberToString(12) + 3)