

import header from "./header.js"

import footer from "./footer.js"

import select from "./select.js"

import search from "./search.js"

import parallax from "./parallax.js"

import property from "./property.js"

import service from "./service.js"

import jumpToSection from "./jump_to_section.js"

import sectionTracker from "./section_tracker.js"


header()

footer()

document.querySelectorAll(".select").forEach(item => {

    select(item)
})

search()

property()

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

const hdSectData = [
    {
        header:document.querySelector(".header-menu-item:first-child"),

        section:document.querySelector(".hero")
    },

    {
        header:document.querySelector(".header-menu-item:nth-child(2)"),

        section:document.querySelector(".properties")
    },

    {
        header:document.querySelector(".header-menu-item:nth-child(3)"),

        section:document.querySelector(".services")
    },

    {
        header:document.querySelector(".hero-action"),

        section:document.querySelector(".properties")
    },

    {
        header:document.querySelector(".header-brand"),

        section:document.querySelector(".hero")
    }

]

jumpToSection(hdSectData, 70)


const navData = [

    {
        header:document.querySelector(".header-menu-item:first-child"),

        section:document.querySelector(".hero")
    },

    {
        header:document.querySelector(".header-menu-item:nth-child(2)"),

        section:document.querySelector(".properties")
    },

    {
        header:document.querySelector(".header-menu-item:nth-child(3)"),

        section:document.querySelector(".services")
    },

]

sectionTracker(navData, 70)

