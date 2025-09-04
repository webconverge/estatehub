

/*

    --properties--

*/

export default function property(){

    const properties = document.querySelectorAll(".property")

    const nextSlide = document.querySelector(".next")
    
    const prevSlide = document.querySelector(".prev")

    let ratio = 3

    function next(){

        // <-
        properties.forEach(property => {
          
            const pos = +property.style.left.split("%")[0]

            property.style.left = pos - (100 / ratio) + "%"

        })

        for(let i=0; i<properties.length; i++){

            const farLeftPos = +properties[i].style.left.split("%")[0]

            if(farLeftPos < 0){

                // wait for slides to settle
                setTimeout(()=>{

                    properties[i].style.transition = ""

                    properties[i].style.left = (properties.length - 1) * 100 / ratio + "%"

                    // wait for the slide to settle
                    setTimeout(()=>{

                        properties[i].style.transition = "left 0.5s"

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

        for(let i=0; i<properties.length; i++){

            const temp = +properties[i].style.left.split("%")[0]

            if(!farRightPos){

                farRightSlide = properties[i]

                farRightPos = temp
            }
            else if(temp > farRightPos){

                farRightSlide = properties[i]

                farRightPos = temp
            }
            
        }

        farRightSlide.style.transition = ""

        farRightSlide.style.left = - 100 / ratio + "%"

        // waiting for the slide to settle
        setTimeout(()=>{

            farRightSlide.style.transition = "left 0.5s"

            properties.forEach(property => {

                const pos = +property.style.left.split("%")[0]

                property.style.left = pos + (100 / ratio) + "%"
            })

        }, 100)

    }

    function init(){

        properties.forEach((property, index) => {
    
            property.style.left = index * 100 / ratio + "%"
    
            property.style.transition = "left 0.5s"
    
            property.style.width = 100 / ratio + "%"
    
        })
    }


    nextSlide.addEventListener("click", () => {

        next()

    })

    prevSlide.addEventListener("click", () => {

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





