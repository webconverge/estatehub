

/*

    --slider--

*/

export default function slider(ref){

    const slides = ref.querySelectorAll(".slide")

    const slideNext = ref.querySelector(".slide-next")
    
    const slidePrev = ref.querySelector(".slide-prev")

    let ratio = 3

    function next(){

        // <-
        slides.forEach(slide => {
          
            const pos = +slide.style.left.split("%")[0]

            slide.style.left = pos - (100 / ratio) + "%"

        })

        for(let i=0; i<slides.length; i++){

            const farLeftPos = +slides[i].style.left.split("%")[0]

            if(farLeftPos < 0){

                // wait for slides to settle
                setTimeout(()=>{

                    slides[i].style.transition = ""

                    slides[i].style.left = (slides.length - 1) * 100 / ratio + "%"

                    // wait for the slide to settle
                    setTimeout(()=>{

                        slides[i].style.transition = "left 0.5s"

                    }, 100)

                }, 600)

                break
            }
        }

    }

    function prev(){

        // ->
        let farRightSlide

        let farRightPos

        for(let i=0; i<slides.length; i++){

            const temp = +slides[i].style.left.split("%")[0]

            if(!farRightPos){

                farRightSlide = slides[i]

                farRightPos = temp
            }
            else if(temp > farRightPos){

                farRightSlide = slides[i]

                farRightPos = temp
            }
            
        }

        farRightSlide.style.transition = ""

        farRightSlide.style.left = - 100 / ratio + "%"

        // waiting for the slide to settle
        setTimeout(()=>{

            farRightSlide.style.transition = "left 0.5s"

            slides.forEach(slide => {

                const pos = +slide.style.left.split("%")[0]

                slide.style.left = pos + (100 / ratio) + "%"
            })

        }, 100)

    }

    function init(){

        slides.forEach((slide, index) => {
    
            slide.style.left = index * 100 / ratio + "%"
    
            slide.style.transition = "left 0.5s"
    
            slide.style.width = 100 / ratio + "%"
    
        })
    }


    slideNext.addEventListener("click", () => {

        next()

    })

    slidePrev.addEventListener("click", () => {

        prev()

    })

    const resizeScreen = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 850){

                    ratio = 3

                    init()
                }
                else if(entry.target.offsetWidth > 550 && entry.target.offsetWidth < 850){

                    ratio = 2

                    init()
                }
                else{

                    ratio = 1

                    init()

                }
            }
        })
    })


    resizeScreen.observe(document.body)


    init()

}





