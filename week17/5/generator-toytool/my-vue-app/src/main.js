import Vue from "Vue";
import Hello from "./hello.vue"

new Vue({
    el: "#app",
    render: h => h(Hello)
})