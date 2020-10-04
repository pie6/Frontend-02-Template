let el = document.documentElement;

// 不重復綁定 listen event
let isListeningMouse = false;

el.addEventListener('mousedown', e => {
    // mouse event, 按下的鍵
    // 根據 button create object
    // e.button

    // create obejct
    let context = Object.create(null)
    contexts.set('mouse' + (1 << e.button), context)

    // console.log('start', (1 << e.button))
    start(e, context)
    let mouseMove = e => {
        // mousedown 分 button 但 mousemove 不分
        // 使用 mask 來區分
        // 0b11111 full 5 keys down
        // 0b00001 left key
        // 0b00010 center key
        let button = 1;
        // loop 5 keys with mask
        while (button <= e.buttons) {
            // mouse center/ right 相反
            if (button & e.buttons) {
                let key
                if (button === 2) {
                    key = 4
                } else if (button === 4) {
                    key = 2
                } else {
                    key = button
                }
                let context = contexts.get('mouse' + key)
                console.log('move', (button))
                move(e, context)
            }
            button = button << 1;
        }
    }
    let mouseUp = e => {
        let context = contexts.get('mouse' + (1 << e.button))
        end(e, context)
        contexts.delete()
        if (e.buttons === 0) {
            el.removeEventListener('mousemove', mouseMove)
            el.removeEventListener('mouseup', mouseUp)
            isListeningMouse = false
        }
    }
    if (!isListeningMouse) {
        el.addEventListener('mousemove', mouseMove)
        el.addEventListener('mouseup', mouseUp)
        isListeningMouse = true
    }
})

let contexts = new Map();

el.addEventListener('touchstart', e => {
    // 有多個 touch point
    for (let touch of e.changedTouches) {
        let context = Object.create(null)
        contexts.set(touch.identifier, context)
        start(touch, context)
    }
})

el.addEventListener('touchmove', e => {
    for (let touch of e.changedTouches) {
        let context = contexts.get(touch.identifier)
        move(touch, context)
    }
})

el.addEventListener('touchend', e => {
    for (let touch of e.changedTouches) {
        end(touch, context)
        contexts.delete(touch.identifier)
    }
})

el.addEventListener('touchcancel', e => {
    // touchend 不同：非正常的 touchmove 結束→ex: alert。被打斷所以無法完成touchend
    for (let touch of e.changedTouches) {
        let context = contexts.get(touch.identifier)
        cancel(touch)
        contexts.delete(touch.identifier)
    }
})


let handler;
let startX, startY
let isPan = false
let isTap = true
let isPress

let start = (point, context) => {
    context.startX = point.clientX
    context.startY = point.clientY

    context.isTap = true
    context.isPress = false
    context.isPan = false


    // press .5s
    context.handler = setTimeout(() => {
        console.log('press')
        context.isTap = false
        context.isPress = true
        context.isPan = false
        // 避免多次 clear
        context.handler = null
    }, 500)


}

let move = (point, context) => {
    let dx = point.clientX - context.startX
    let dy = point.clientY - context.startY
    // console.log('move', point.clientX, point.clientY)
    // square root operator is slower
    // move 10px
    if (!context.isPan && (dx ** 2 + dy ** 2 > 100)) {
        // 一次性 var
        context.isTap = false
        context.isPan = true
        context.isPress = false
        clearTimeout(context.handler)
        console.log('panStart')
    }

    if (context.isPan) {
        console.log('pan')
    }

    // console.log('move', point.clientX, point.clientY)
}

let end = (point, context) => {
    // tap
    // console.log('end', point.clientX, point.clientY)
    if (context.isTap) {
        clearTimeout(context.handler)
        console.log('tap')
    }

    if (context.isPan) {
        console.log('panEnd')
    }

    if (context.isPress) {
        console.log('pressEnd')
    }
}

let cancel = (point, context) => {
    clearTimeout(context.handler)
    console.log('cancel', point.clientX, point.clientY)
}