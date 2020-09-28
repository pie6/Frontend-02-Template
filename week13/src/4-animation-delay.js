import { linear } from "./4-timingFunction";
// 外部無法 access
// Symbol 可理解為特殊的 string，不會重覆 (唯一性)
const TICK = Symbol("tick")
const TICK_HANDLER = Symbol("tick-handler")
const ANIMATIONS = Symbol("animations")
const START_TIME = Symbol("add-time")
const PAUSE_START = Symbol("pause-start")
const PAUSE_TIME = Symbol("pause-time")

export class Timeline {
    constructor() {
        // 通常 constructor 做 varaible initial
        this[ANIMATIONS] = new Set();
        this[START_TIME] = new Map()
    }

    start() {
        let startTime = Date.now()
        this[PAUSE_TIME] = 0
        this[TICK] = () => {
            let now = Date.now()
            for(let animation of this[ANIMATIONS]) {
                let t;

                if (this[START_TIME].get(animation < startTime)) {
                    t = now - startTime - this[PAUSE_TIME] - animation.delay
                } else {
                    t = now - this[START_TIME].get(animation) - this[PAUSE_TIME] - animation.delay
                }

                if(animation.duration < t ){
                    this[ANIMATIONS].delete(animation)
                    t = animation.duration
                }
                if( t > 0)
                    animation.receive(t)
            }
            this[TICK_HANDLER] = requestAnimationFrame(this[TICK])
        }
        this[TICK](this[TICK_HANDLER])
    }

    // set rate() {}
    // get rate() {}

    pause() {
        this[PAUSE_START] = Date.now()
        cancelAnimationFrame(this[TICK_HANDLER])
    }
    resume() {
        this[PAUSE_TIME] += Date.now() - this[PAUSE_START]
        this[TICK]()
    }

    reset() {
        this.pause()
        let startTime = Date.now()
        this[PAUSE_TIME] = 0
        this[PAUSE_START] = Date.now()
        this[ANIMATIONS] = new Set();
        this[START_TIME] = new Map()
        this[TICK_HANDLER]
    }
    add(animation, startTime) {
        if (arguments.length < 2) {
            startTime = Date.now()
        }
        this[ANIMATIONS].add(animation)
        this[START_TIME].set(animation, startTime)

    }
}

console.log(linear)
// 屬性 Animation vs frame animation
// optional: timingFunction
export class Animation {
    constructor(object, property, startValue, endValue, duration, delay, timingFunction, template) {
        timingFunction = timingFunction || linear
        template = template || linear
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFunction = timingFunction;
        this.delay = delay;
        this.template = template;
    }
    receive(time) {
        let range = (this.endValue - this.startValue);
        //Bezier curve 0 ~ 1
        let progress = this.timingFunction(time / this.duration)
        this.object[this.property] = this.template(this.startValue + range * progress)
    }
}