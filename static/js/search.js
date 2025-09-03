

/*

    --search--

*/

export default function search(){

    const searchInnerWrapper = document.querySelector(".search-inner-wrapper")

    const searchInput = document.querySelector(".search-input")

    const searchBtn = document.querySelector(".search-btn")

    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 800){

                    searchInnerWrapper.classList.remove("search-inner-wrapper-medium")

                    searchInnerWrapper.classList.remove("search-inner-wrapper-small")

                    searchInput.classList.remove("search-input-small")

                    searchBtn.classList.remove("search-btn-small")
                }
                else if(entry.target.offsetWidth > 600 && entry.target.offsetWidth < 800){

                    searchInnerWrapper.classList.add("search-inner-wrapper-medium")
                    
                    searchInnerWrapper.classList.remove("search-inner-wrapper-small")

                    searchInput.classList.remove("search-input-small")

                    searchBtn.classList.remove("search-btn-small")
                }
                else{

                    searchInnerWrapper.classList.add("search-inner-wrapper-small")

                    searchInput.classList.add("search-input-small")

                    searchBtn.classList.add("search-btn-small")
                }
            }
        })
    })

    resizeScreen.observe(document.body)

}

