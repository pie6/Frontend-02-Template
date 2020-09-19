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

        // 三個 event 一組
        this.root.addEventListener('mousedown', e => {
            // mouseup 時將 mouseup/mousemove disable

            let move = e => {
                console.log('mousemove')
            }

            let up = e => {
                // document 上 監聽，即使移出 browser 仍可監聽
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
