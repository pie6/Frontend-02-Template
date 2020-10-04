let el = document.documentElement;

el.addEventListener('mousedown', e => {
    start(e)
    let mouseMove = e => {
        move(e)
    }
    let mouseUp = e => {
        end(e)
        el.addEventListener('mousemove', mouseMove)
        el.addEventListener('mouseup', mouseUp)
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

let start = (point) => {
    console.log('start', point.clientX, point.clientY)
}

let move = (point) => {
    console.log('move', point.clientX, point.clientY)
}

let end = (point) => {
    console.log('end', point.clientX, point.clientY)
}

let cancel = (point) => {
    console.log('cancel', point.clientX, point.clientY)
}