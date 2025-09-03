

import header from "./header.js"

import footer from "./footer.js"

import select from "./select.js"

import search from "./search.js"

import hero from "./hero.js"

header()

footer()

document.querySelectorAll(".select").forEach(item => {

    select(item)
})

search()

hero()

