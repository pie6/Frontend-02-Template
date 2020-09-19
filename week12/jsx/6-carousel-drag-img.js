import { Component, createElement } from "./framework";

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

        let position = 0;
        // 還需 children 的 getClientRect
        let carouselWidth = 500

        // 三個 event 一組
        this.root.addEventListener('mousedown', e => {
            let children = this.root.children
            let startX = e.clientX

            let move = e => {
                let x = e.clientX - startX
                console.log('mousemove')
                for (const child of children) {
                    child.style.transition = 'none'
                    child.style.transform = `translateX(${x - position * carouselWidth}px)`
                }
            }

            let up = e => {
                let x = e.clientX - startX
                // drag 超過一半，到下一張
                position = position - Math.round(x / carouselWidth)
                for (const child of children) {
                    child.style.transition = ''
                    child.style.transform = `translateX(${- position * carouselWidth}px)`
                }
                // mouseup 時將 mouseup/mousemove disable
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)
            }

            document.addEventListener('mouseup', up)
            document.addEventListener('mousemove', move)
        })


        return this.root
    }
    mountTo(parent){
        parent.appendChild(this.render())
    }
}

const data = [
    "https://picsum.photos/500/250",
    "https://picsum.photos/500/250",
    "https://picsum.photos/500/250"
]

let a = <Carousel src={data}/>
a.mountTo(document.body)
