


/*

    --service--

*/

export default function service(){

    const servicesInnerWrapper = document.querySelector(".services-inner-wrapper")

    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 850){

                    servicesInnerWrapper.classList.remove("services-inner-wrapper-medium")

                    servicesInnerWrapper.classList.remove("services-inner-wrapper-small")
                }
                else if(entry.target.offsetWidth > 550 && entry.target.offsetWidth < 850){

                    servicesInnerWrapper.classList.add("services-inner-wrapper-medium")

                    servicesInnerWrapper.classList.remove("services-inner-wrapper-small")
                }
                else{

                    servicesInnerWrapper.classList.add("services-inner-wrapper-small")
                }
            }
        })
    })

    resizeScreen.observe(document.body)

}

