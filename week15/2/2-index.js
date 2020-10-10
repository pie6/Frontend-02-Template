import { Component, createElement, STATE, ATTRIBUTE } from "./framework";
import { enableGesture } from "./7-gesture-encapsulation";
import { Timeline, Animation } from "./4-animation-delay";
import { ease } from "./4-timingFunction";

export { STATE, ATTRIBUTE } from './framework'

class Carousel extends Component {
    constructor() {
        super()
    }

    render() {
        this.root = document.createElement("div")
        this.root.classList.add("carousel")

        for (const record of this[ATTRIBUTE].src) {
            let child = document.createElement('div')
            child.style.backgroundImage = `url('${record.img}')`
            this.root.appendChild(child)
        }

        enableGesture(this.root)
        let children = this.root.children
        const imgW = 500

        let timeline = new Timeline
        timeline.start()

        let t = 0;
        let handler = null

        this[STATE].position = 0


        // Animation 產生的距離
        let ax = 0;

        this.root.addEventListener("start", e => {
            timeline.pause();
            clearInterval(handler)
            let progress = (Date.now() - t) / 1500
            ax = ease(progress) * imgW - imgW
        })

        this.root.addEventListener("tap", e => {
            this.triggerEvent("click", {
                data: this[ATTRIBUTE].src[this[STATE].position],
                position: this[STATE].position
            })
        })

        this.root.addEventListener("pan", e =>{
            let x = e.clientX - e.startX - ax
            let current = this[STATE].position - ((x - x % imgW)/ imgW)

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

            let current = this[STATE].position - ((x - x % imgW)/ imgW)

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

            this[STATE].position = this[STATE].position - ((x - x % 500) / 500) - direction
            this[STATE].position = (this[STATE].position % children.length + children.length) % children.length
            this.triggerEvent("change", {position: this[STATE].position})

        })

        let nextPicture = () => {
            let children = this.root.children;
            let nextIndex = (this[STATE].position + 1) % children.length

            let current = children[this[STATE].position]
            let next = children[nextIndex]

            // Animation 產生的距離
            t= Date.now();

            timeline.add(new Animation(
                current.style,
                "transform",
                - this[STATE].position * 500,
                -500 - this[STATE].position * 500,
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

            // type, args
            this.triggerEvent("change", {position: this[STATE].position})
            this[STATE].position = nextIndex
        }
        return this.root
    }
}

const data = [
    {
        url:'https://www.bing.com/',
        img:"https://fakeimg.pl/500x250/ff0000/?text=1",
    },
    {
        url:'https://www.wikipedia.org/',
        img:"https://fakeimg.pl/500x250/00ff00/?text=2",
    },
    {
        url:'https://twitter.com/?lang=en',
        img:"https://fakeimg.pl/500x250/0000ff/?text=3"
    }
]

let a =
    <Carousel
        src={data}
        onChange={e => console.log(e.detail.position)}
        onClick={e => location.href = e.detail.data.url}
    />
a.mountTo(document.body)
