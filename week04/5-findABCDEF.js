function match(str) {
    let a = false
    let b = false
    let c = false
    let d = false
    let e = false
    let f = false

    for (const char of str) {
        if (char === 'a') {
            a = true
        } else if (a && char === 'b') {
            b = true
        } else if (a && b && char === 'c') {
            c = true
        } else if (a && b && c && char === 'd') {
            d = true
        } else if (a && b && c && d && char === 'e') {
            e = true
        } else if (a && b && c && d && e && char === 'f') {
            f = true
            return true
        } else {
            return false
        }
    }
}

// true
console.log(
    match('012abcdef222')
)