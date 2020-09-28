import { createElement } from "./framework";
import Carousel from "./7-carousel";
import { Timeline, Animation } from "./2-animation-startTime";
const data = [
    "https://picsum.photos/id/100/500/250",
    "https://picsum.photos/id/200/500/250",
    "https://picsum.photos/id/300/500/250"
]

let a = <Carousel src={data}/>
a.mountTo(document.body)

let tl = new Timeline()

window.tl = tl;
window.animation = new Animation({
    set a (v) {
        console.log(v);
    }
}, "a", 0, 100, 1000, null)


// tl.add(new Animation({
//     set a (v) {
//         console.log(v);
//     }
// }, "a", 0, 100, 1000, null))

tl.start()