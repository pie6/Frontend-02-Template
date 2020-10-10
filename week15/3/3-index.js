import { Component, createElement, STATE, ATTRIBUTE } from "./framework";
export { STATE, ATTRIBUTE } from './framework'

import { Button } from "./Button.jsx";
import { List } from "./List.jsx";

const data = [
    {
        url:'https://www.bing.com/',
        img:"https://fakeimg.pl/500x250/ff0000/?text=1",
        title: "1"
    },
    {
        url:'https://www.wikipedia.org/',
        img:"https://fakeimg.pl/500x250/00ff00/?text=2",
        title: "2"
    },
    {
        url:'https://twitter.com/?lang=en',
        img:"https://fakeimg.pl/500x250/0000ff/?text=3",
        title: "3"
    }
]


// context type children
let a = <Button>
    content
</Button>
a.mountTo(document.body)


// template type children
let b = <List data={data}>
    {record =>
        <div style="text-align: center; margin-bottom: 1rem">
            <img src={record.img} />
            <div>
                <a href={record.url}>{record.title}</a>
            </div>
        </div>
    }
</List>
b.mountTo(document.body)
