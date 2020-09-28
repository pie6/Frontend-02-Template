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
                let current = position - ((x - x % carouselWidth)/ carouselWidth)

                for (const offset of [-1, 0 , -1]) {
                    let pos = current + offset;
                    // 避免 negative num (-1 → 3)
                    pos = (pos + children.length) % children.length

                    children[pos].style.transition = 'none'
                    children[pos].style.transform = `
                        translateX(${- pos * carouselWidth + (offset * carouselWidth) + (carouselWidth + x % carouselWidth)}px)
                    `
                }
            }

            let up = e => {
                let x = e.clientX - startX
                // drag 超過一半，到下一張
                position = position - Math.round(x / carouselWidth)
                console.log(position)

                for (const offset of [0, - Math.sign(Math.round(x /carouselWidth) - x + (carouselWidth/ 2) * Math.sign(x))]) {
                    let pos = position + offset;
                    console.log('offset', offset)
                    // 避免 negative num (-1 → 3)
                    pos = (pos + children.length) % children.length

                    children[pos].style.transition = ''
                    children[pos].style.transform = `translateX(${(- pos * carouselWidth) + (offset * carouselWidth)}px)`
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

export default Carousel;