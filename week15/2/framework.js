export function createElement(type, attributes, ...children) {
    let el;

    if (typeof type === 'string') {
        el = new ElementWrapper(type)
    } else {
        el = new type
    }
    // obj
    for (let name in attributes) {
        el.setAttribute(name, attributes[name])
    }
    // array
    for (const child of children) {
        if (typeof child === 'string') {
            // child = document.createTextNode(child)
            child = new TextWrapper(child)
        }
        el.appendChild(child)
    }
    return el;
}

export const ATTRIBUTE = Symbol('attribute')
export const STATE = Symbol('state')

export class Component {
    constructor(type) {
        this[ATTRIBUTE] = Object.create(null)
        this[STATE] = Object.create(null)
    }
    setAttribute(name, value) {
        this[ATTRIBUTE][name] = value
    }
    appendChild(child) {
        child.mountTo(this.root)
    }
    mountTo(parent) {
        if (!this.root)
            this.render()
        parent.appendChild(this.root)
    }
    triggerEvent(type, args) {
        //type 首字大寫
        this[ATTRIBUTE]["on" + type.replace(/^[\s\S]/, s => s.toUpperCase())](new CustomEvent(type, {detail: args}))
    }
}

class ElementWrapper extends Component {
    constructor(type) {
        this.root = document.createElement(type)
    }
}


class TextWrapper extends Component {
    constructor(content) {
        this.root = document.createTextNode(content)
    }

}