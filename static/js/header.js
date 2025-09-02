

/*

    --header--

*/

export default function header(){

    const headerMenuWrapper = document.querySelector(".header-menu-wrapper")
    
    const headerMenu = document.querySelector(".header-menu")

    const headerMenuBtn = document.querySelector(".header-menu-btn")

    const headerMenuItems = document.querySelectorAll(".header-menu-item")
    
    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 800){

                    headerMenu.classList.remove("header-menu-mobile")

                    headerMenuWrapper.classList.remove("header-menu-wrapper-mobile")
                    
                    headerMenuBtn.classList.remove("header-menu-btn-mobile")

                    headerMenuItems.forEach(item => {

                        item.classList.remove("header-menu-item-mobile")
                    })
                }
                else{

                   headerMenu.classList.add("header-menu-mobile")

                    headerMenuWrapper.classList.add("header-menu-wrapper-mobile")
                    
                    headerMenuBtn.classList.add("header-menu-btn-mobile")

                    headerMenuItems.forEach(item => {

                        item.classList.add("header-menu-item-mobile")
                    })
                }
            }
        })
    })

    resizeScreen.observe(document.body)

    headerMenuBtn.addEventListener("click", () => {

        headerMenu.classList.toggle("header-menu-mobile-opened")
    })
}




