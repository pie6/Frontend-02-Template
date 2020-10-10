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
    let processChildren = (children) => {
        for (const child of children) {
            if(typeof child === 'object' && (child instanceof Array)){
                processChildren(child)
                continue;
            }
            if (typeof child === 'string') {
                child = new TextWrapper(child)
            }
            el.appendChild(child)
        }
    }
    processChildren(children);

    return el;
}

export const ATTRIBUTE = Symbol('attribute')
export const STATE = Symbol('state')

export class Component {
    constructor(type) {
        this[ATTRIBUTE] = Object.create(null)
        this[STATE] = Object.create(null)
    }
    render() {
        return this.root
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
        super();
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
}


class TextWrapper extends Component {
    constructor(content) {
        super();
        this.root = document.createTextNode(content)
    }

}