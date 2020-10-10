// new Listener(new Recognizer(dispatch))
export class Listener {
    constructor(el, recognizer) {

        let contexts = new Map();
        let isListeningMouse = false;

        el.addEventListener('mousedown', e => {
            let context = Object.create(null)
            contexts.set('mouse' + (1 << e.button), context)

            recognizer.start(e, context)
            let mouseMove = e => {
                let button = 1;
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
                        // console.log('move', (button))
                        recognizer.move(e, context)
                    }
                    button = button << 1;
                }
            }
            let mouseUp = e => {
                let context = contexts.get('mouse' + (1 << e.button))
                recognizer.end(e, context)
                contexts.delete()
                if (e.buttons === 0) {
                    document.removeEventListener('mousemove', mouseMove)
                    document.removeEventListener('mouseup', mouseUp)
                    isListeningMouse = false
                }
            }
            if (!isListeningMouse) {
                document.addEventListener('mousemove', mouseMove)
                document.addEventListener('mouseup', mouseUp)
                isListeningMouse = true
            }
        })

        el.addEventListener('touchstart', e => {
            for (let touch of e.changedTouches) {
                let context = Object.create(null)
                contexts.set(touch.identifier, context)
                recognizer.start(touch, context)
            }
        })

        el.addEventListener('touchmove', e => {
            for (let touch of e.changedTouches) {
                let context = contexts.get(touch.identifier)
                recognizer.move(touch, context)
            }
        })

        el.addEventListener('touchend', e => {
            for (let touch of e.changedTouches) {
                let context = contexts.get(touch.identifier)
                recognizer.end(touch, context)
                contexts.delete(touch.identifier)
            }
        })

        el.addEventListener('touchcancel', e => {
            for (let touch of e.changedTouches) {
                recognizer.cancel(touch)
                contexts.delete(touch.identifier)
            }
        })
    }
}

export class Recognizer {
    constructor(dispatcher) {
        this.dispatcher = dispatcher
    }

    start(point, context) {
        context.startX = point.clientX
        context.startY = point.clientY

        this.dispatcher.dispatch('start', {
            clientX: point.clientX,
            clientY: point.clientY
        })

        context.points = [{
            t: Date.now(),
            x: point.clientX,
            y: point.clientY
        }]

        context.isTap = true
        context.isPress = false
        context.isPan = false
        context.handler = setTimeout(() => {
            context.isTap = false
            context.isPress = true
            context.isPan = false
            context.handler = null
            this.dispatcher.dispatch('press', {})
        }, 500)


    }

    move(point, context) {
        let dx = point.clientX - context.startX
        let dy = point.clientY - context.startY
        if (!context.isPan && (dx ** 2 + dy ** 2 > 100)) {
            context.isTap = false;
            context.isPan = true;
            context.isPress = false;
            context.isPan = true;
            context.isVertical = Math.abs(dx) < Math.abs(dy)

            this.dispatcher.dispatch('panstart', {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY,
                isVertical: context.isVertical
            })
            clearTimeout(context.handler)
        }

        if (context.isPan) {
            this.dispatcher.dispatch('pan', {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY,
                isVertical: context.isVertical
            })
        }

        context.points = context.points.filter(point => Date.now() - point.t < 500)

        context.points.push({
            t: Date.now(),
            x: point.clientX,
            y: point.clientY
        })
    }

    end(point, context) {
        if (context.isTap) {
            clearTimeout(context.handler)
            this.dispatcher.dispatch('tap')
        }

        if (context.isPress) {
            this.dispatcher.dispatch('pressend', {})
        }

        context.points = context.points.filter(item => Date.now() - item.t < 500)

        let distance, velocity
        if (!context.points.length > 0) {
            velocity = 0
        } else {
            distance = Math.sqrt(
                (point.clientX - context.points[0].x) ** 2 +
                (point.clientY - context.points[0].y) ** 2
            )

            velocity = distance / (Date.now() - context.points[0].t)
            // console.log('velocity', velocity)
        }

        // velocity unit: pixel/ms
        if (velocity > 1.5) {
            this.dispatcher.dispatch('flick', {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY,
                isVertical: context.isVertical,
                velocity: velocity
            })
            context.isFlick = true
        } else {
            context.isFlick = false
        }

        if (context.isPan) {
            this.dispatcher.dispatch('panend', {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY,
                isVertical: context.isVertical,
                isFlick: context.isFlick,
                velocity: velocity
            })
        }

        this.dispatcher.dispatch('end', {
            startX: context.startX,
            startY: context.startY,
            clientX: point.clientX,
            clientY: point.clientY,
            isVertical: context.isVertical,
            isFlick: context.isFlick,
            velocity: velocity
        })

    }

    cancel(point, context) {
        clearTimeout(context.handler)
        this.dispatcher.dispatch('cancel', {})
    }
}

export class Dispatcher {
    constructor(el) {
        this.el = el
    }
    dispatch(type, properties) {
        let event = new Event(type);
        for (let name in properties) {
            event[name] = properties[name]
        }
        this.el.dispatchEvent(event)
    }
}

export function enableGesture(el) {
    new Listener(el, new Recognizer(new Dispatcher(el)))
}