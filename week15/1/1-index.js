import { Component, createElement } from "./framework";
import { enableGesture } from "./7-gesture-encapsulation";
import { Timeline, Animation } from "./4-animation-delay";
import { ease } from "./4-timingFunction";

class Carousel extends Component {
    constructor() {
        super()
        this.attributes = Object.create(null)
    }
    setAttribute(name, value) {
        this.attributes[name] = value
    }
    render() {
        this.root = document.createElement("div")
        this.root.classList.add("carousel")

        for (const record of this.attributes.src) {
            let child = document.createElement('div')
            child.style.backgroundImage = `url('${record}')`
            this.root.appendChild(child)
        }

        enableGesture(this.root)
        let children = this.root.children
        const imgW = 500

        let timeline = new Timeline
        timeline.start()

        // 使用 local variable 做 state
        let t = 0;
        let position = 0;
        let handler = null


        // Animation 產生的距離
        let ax = 0;

        this.root.addEventListener("start", e => {
            timeline.pause();
            clearInterval(handler)
            let progress = (Date.now() - t) / 1500
            ax = ease(progress) * imgW - imgW
        })

        this.root.addEventListener("pan", e =>{
            let x = e.clientX - e.startX - ax
            let current = position - ((x - x % imgW)/ imgW)

            for (let offset of [-1, 0, -1]) {
                let pos = current + offset;

                pos = (pos % children.length + children.length) % children.length

                children[pos].style.transition = 'none'
                children[pos].style.transform = `
                    translateX(${
                        - pos * imgW +
                        offset * imgW +
                        x % imgW
                    }px)
                `
            }

        })

        this.root.addEventListener("end", e => {

            timeline.reset()
            timeline.start()
            handler = setInterval(nextPicture, 3000)

            let x = e.clientX - e.startX - ax

            let current = position - ((x - x % imgW)/ imgW)

            let direction = Math.round((x % 500) / 500)

            if(e.isFlick) {
                if(e.velocity < 0 ) {
                    direction = Math.ceil((x % 500) / 500)
                } else {
                    direction = Math.floor((x % 500) / 500)
                }
            }

            for (let offset of [-1, 0, -1]) {
                let pos = current + offset;

                pos = (pos % children.length + children.length) % children.length


                timeline.add(new Animation(
                    children[pos].style,
                    "transform",
                    - pos * imgW + (offset * imgW) + (imgW + x % imgW),
                    - pos * imgW + (offset * imgW) + direction * imgW,
                    500,
                    0,
                    ease,
                    v => `translateX(${v}px)`
                ))
            }

            position = position - ((x - x % 500) / 500) - direction
            position = (position % children.length + children.length) % children.length

        })

        let nextPicture = () => {
            let children = this.root.children;
            let nextIndex = (position + 1) % children.length

            let current = children[position]
            let next = children[nextIndex]

            // Animation 產生的距離
            t= Date.now();

            timeline.add(new Animation(
                current.style,
                "transform",
                - position * 500,
                -500 - position * 500,
                500,
                0,
                ease,
                v => `translateX(${v}px)`
            ))

            timeline.add(new Animation(
                next.style,
                "transform",
                500 - nextIndex * 500,
                - nextIndex * 500,
                0,
                ease,
                v => `translateX(${v}px)`
            ))

            position = nextIndex
        }
        return this.root
    }
    mountTo(parent){
        parent.appendChild(this.render())
    }
}

const data = [
    "https://fakeimg.pl/500x250/ff0000/?text=1",
    "https://fakeimg.pl/500x250/00ff00/?text=2",
    "https://fakeimg.pl/500x250/0000ff/?text=3"
]

let a = <Carousel src={data}/>
a.mountTo(document.body)
