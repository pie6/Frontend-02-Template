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
        console.log(this.attributes.src)
        this.root = document.createElement("div")
        for (const record of this.attributes.src) {
            let child = document.createElement('img')
            child.src = record
            this.root.appendChild(child)
        }
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
