let el = document.documentElement;

el.addEventListener('mousedown', e => {
    start(e)
    let mouseMove = e => {
        move(e)
    }
    let mouseUp = e => {
        end(e)
        el.removeEventListener('mousemove', mouseMove)
        el.removeEventListener('mouseup', mouseUp)
    }
    el.addEventListener('mousemove', mouseMove)
    el.addEventListener('mouseup', mouseUp)
})

el.addEventListener('touchstart', e => {
    // 有多個 touch point
    for (let touch of e.changedTouches) {
        start(touch)
    }
})

el.addEventListener('touchmove', e => {
    for (let touch of e.changedTouches) {
        move(touch)
    }
})

el.addEventListener('touchend', e => {
    for (let touch of e.changedTouches) {
        end(touch)
    }
})

el.addEventListener('touchcancel', e => {
    // touchend 不同：非正常的 touchmove 結束→ex: alert。被打斷所以無法完成touchend
    for (let touch of e.changedTouches) {
        cancel(touch)
    }
})


let handler;
let startX, startY
let isPan = false
let isTap = true
let isPress

let start = (point) => {
    startX = point.clientX,
        startY = point.clientY

    isTap = true
    isPress = false
    isPan = false
    // press .5s
    handler = setTimeout(() => {
        console.log('press')
        isTap = false
        isPress = true
        isPan = false
        // 避免多次 clear
        handler = null
    }, 500)


}

let move = (point) => {
    let dx = point.clientX - startX
    let dy = point.clientY - startY
    // console.log('move', point.clientX, point.clientY)
    // square root operator is slower
    // move 10px
    if (!isPan && (dx ** 2 + dy ** 2 > 100)) {
        // 一次性 var
        isTap = false
        isPan = true
        isPress = false
        clearTimeout(handler)
        console.log('panStart')
    }

    if (isPan) {
        console.log('pan')
    }

    // console.log('move', point.clientX, point.clientY)
}

let end = (point) => {
    // tap
    // console.log('end', point.clientX, point.clientY)
    if (isTap) {
        clearTimeout(handler)
        console.log('tap')
    }

    if (isPan) {
        console.log('panEnd')
    }

    if (isPress) {
        console.log('pressEnd')
    }
}

let cancel = (point) => {
    clearTimeout(handler)
    console.log('cancel', point.clientX, point.clientY)
}