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
        let imgW = 500

        // 三個 event 一組
        this.root.addEventListener('mousedown', e => {
            let children = this.root.children
            let startX = e.clientX

            let move = e => {

                let x = e.clientX - startX
                let current = position - Math.round((x - x % imgW)/ imgW)

                for (let offset of [-1, 0, -1]) {
                    let pos = current + offset;
                    // 避免 negative num (-1 → 3)
                    pos = (pos + children.length) % children.length

                    children[pos].style.transition = 'none'
                    children[pos].style.transform = `
                        translateX(${
                            - pos * imgW +
                            offset * imgW +
                            x % imgW
                        }px)
                    `
                }

            }

            let up = e => {
                // mouseup 時將 mouseup/mousemove disable
                document.removeEventListener('mousemove', move)
                document.removeEventListener('mouseup', up)

                let x = e.clientX - startX
                // drag 超過一半，到下一張
                position = position - Math.round(x / imgW)

                for (const offset of [0, - Math.sign(Math.round(x / imgW) - x + (imgW / 2) * Math.sign(x))]) {
                    let pos = position + offset;
                    // 避免 negative num (-1 → 3)
                    pos = (pos + children.length) % children.length

                    children[pos].style.transition = ''
                    children[pos].style.transform = `translateX(${
                        - pos * imgW +
                        offset * imgW
                        }px)`
                }
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
    "https://fakeimg.pl/500x250/ff0000/?text=1",
    "https://fakeimg.pl/500x250/00ff00/?text=2",
    "https://fakeimg.pl/500x250/0000ff/?text=3"
]

let a = <Carousel src={data}/>
a.mountTo(document.body)
