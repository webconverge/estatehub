

/*

    --select--

*/

export default function select(ref){

    const selectPlaceholder = ref.querySelector(".select-placeholder")

    const selectHeader = ref.querySelector(".select-header")

    const selectMenu = ref.querySelector(".select-menu")

    const selectIcon = ref.querySelector(".select-icon")

    const selectMenuItems = ref.querySelectorAll(".select-menu-item")

    selectPlaceholder.innerHTML = selectMenuItems[0].innerHTML

    selectHeader.addEventListener("click", ()=>{

        selectMenu.classList.toggle("select-menu-opened")

        selectIcon.classList.toggle("select-icon-menu-opened")

    })

    selectMenuItems.forEach(item => {

        item.addEventListener("click", ()=>{

            selectPlaceholder.innerHTML = item.innerHTML

        })
    })

    window.addEventListener("click", e => {

        if(!ref.contains(e.target)){

            selectMenu.classList.remove("select-menu-opened")

            selectIcon.classList.remove("select-icon-menu-opened")
        }
    })


}



