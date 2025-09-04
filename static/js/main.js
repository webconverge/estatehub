

import header from "./header.js"

import footer from "./footer.js"

import select from "./select.js"

import search from "./search.js"

import parallax from "./parallax.js"

import slider from "./slider.js"

import service from "./service.js"


header()

footer()

document.querySelectorAll(".select").forEach(item => {

    select(item)
})

search()

document.querySelectorAll(".slider").forEach(item => {

    slider(item)
})

service()


const parallaxData = [
    {
        image:document.querySelector(".hero-bg"),

        wrapper:document.querySelector(".hero")
    },

    {
        image:document.querySelector(".services-bg"),

        wrapper:document.querySelector(".services")
    }
]

parallax(parallaxData)





