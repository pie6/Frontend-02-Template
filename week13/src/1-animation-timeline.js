// 外部無法 access
// Symbol 可理解為特殊的 string，不會重覆 (唯一性)
const TICK = Symbol("tick")
const TICK_HANDLER = Symbol("tick-handler")
const ANIMATIONS = Symbol("animations")

export class Timeline {
    constructor() {
        // 通常 constructor 做 varaible initial
        this[ANIMATIONS] = new Set();
    }

    start() {
        let startTime = Date.now()
        this[TICK] = () => {
            let t = Date.now() - startTime
            for(let animation of this[ANIMATIONS]) {
                let t0 = t
                if(animation.duration < t ){
                    this[ANIMATIONS].delete(animation)
                    t0 = animation.duration
                }
                animation.receive(t0)
            }
            requestAnimationFrame(this[TICK])
        }
        this[TICK]()
    }

    // set rate() {}
    // get rate() {}

    pause() {}
    resume() {}

    reset() {}
    add(animation) {
        this[ANIMATIONS].add(animation)
    }
}


// 屬性 Animation vs frame animation
// optional: timingFunction
export class Animation {
    constructor(object, property, startValue, endValue, duration, timingFunction) {
        this.object = object;
        this.property = property;
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.timingFunction = timingFunction;
    }
    receive(time) {
        let range = (this.endValue - this.startValue);
        this.object[this.property] = this.startValue + range * time / this.duration
    }
}