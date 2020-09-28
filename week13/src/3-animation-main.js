import { createElement } from "./framework";
import Carousel from "./7-carousel";
import { Timeline, Animation } from "./3-animation-pause-resume";


const data = [
    "https://picsum.photos/id/100/500/250",
    "https://picsum.photos/id/200/500/250",
    "https://picsum.photos/id/300/500/250"
]

let a = <Carousel src={data}/>
a.mountTo(document.body)


let tl = new Timeline()

tl.add(new Animation(
    document.querySelector("#el").style,
    "transform", 0, 500, 3000, 0,null,
    v => `translateX(${v}px)`
))

document.querySelector("#pause")
    .addEventListener("click",
        () => tl.pause()
    )

document.querySelector("#resume")
    .addEventListener("click",
        () => tl.resume()
    )

tl.start();