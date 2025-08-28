

const navClose = document.querySelector(".nav-close")
const navOpen = document.querySelector(".nav-open")
const navWrapper = document.querySelector(".nav-wrapper")
const headerInnerWrapper = document.querySelector(".header-inner-wrapper")
const nav = document.querySelector(".nav")
const pageOverlay = document.querySelector(".page-overlay")
const navItems = document.querySelectorAll(".nav-item")

const resizeObserver = new ResizeObserver(entries => {

    entries.forEach(entry => {

        if(entry.target == document.body){

            if(entry.target.offsetWidth >= 800){

                navClose.classList.add("nav-close-none")
                navOpen.classList.add("nav-open-none")
                navWrapper.classList.add("nav-wrapper-contents")
                headerInnerWrapper.classList.remove("header-inner-wrapper-btwn")
                navWrapper.classList.remove("nav-wrapper-fixed")
                nav.classList.remove("nav-col")
                pageOverlay.classList.remove("page-overlay-initial")
                navWrapper.classList.remove("nav-wrapper-fixed-open")
                navItems.forEach(item => {
                    item.classList.remove("nav-item-align")
                })
            }
            else{

                navClose.classList.remove("nav-close-none")
                navOpen.classList.remove("nav-open-none")
                navWrapper.classList.remove("nav-wrapper-contents")
                navWrapper.classList.add("nav-wrapper-fixed")
                headerInnerWrapper.classList.add("header-inner-wrapper-btwn")
                nav.classList.add("nav-col")
                navItems.forEach(item => {
                    item.classList.add("nav-item-align")
                })
            }
        }
    })
})

resizeObserver.observe(document.body)


navOpen.addEventListener("click", ()=>{

    navWrapper.classList.add("nav-wrapper-fixed-open")
    pageOverlay.classList.add("page-overlay-initial")
})

navClose.addEventListener("click", ()=>{
    
    navWrapper.classList.remove("nav-wrapper-fixed-open")
    pageOverlay.classList.remove("page-overlay-initial")
})

pageOverlay.addEventListener("click", ()=>{

    navWrapper.classList.remove("nav-wrapper-fixed-open")
    pageOverlay.classList.remove("page-overlay-initial")
})