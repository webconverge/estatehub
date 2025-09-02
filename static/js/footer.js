

/*

    --footer--

*/

export default function footer(){

    const footerInnerWrapper = document.querySelector(".footer-inner-wrapper")

    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 800){

                    footerInnerWrapper.classList.remove("footer-inner-wrapper-medium")

                    footerInnerWrapper.classList.remove("footer-inner-wrapper-small")
                }
                else if(entry.target.offsetWidth > 500 && entry.target.offsetWidth < 800){
                    
                    footerInnerWrapper.classList.add("footer-inner-wrapper-medium")

                    footerInnerWrapper.classList.remove("footer-inner-wrapper-small")
                }
                else{

                    footerInnerWrapper.classList.add("footer-inner-wrapper-small")
                }
            }
        })
    })

    resizeScreen.observe(document.body)
}



