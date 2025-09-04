

/*

    --jump to section--

    data : [
    
        {
            header:ref,

            section:ref
        },

        {
            header:ref,

            section:ref
        }
        ...
    ],

    threshold : number(positive in pixel)

*/

export default function jumpToSection(data, threshold){

    data.forEach(item => {

        item.header.addEventListener("click", e => {

            e.preventDefault()

            const rect = item.section.getBoundingClientRect()

            if(rect.top > threshold){

                window.scrollTo({
                    
                    top:window.scrollY + rect.top - threshold,

                    behavior:"smooth"
                })

            }
            else if(rect.top < threshold){

                if(rect.top >= 0){

                    window.scrollTo({

                        top:window.scrollY - (threshold - rect.top),

                        behavior:"smooth"
                    })
                }
                else if(rect.top < 0){

                    window.scrollTo({

                        top:window.scrollY - (threshold - rect.top),

                        behavior:"smooth"
                    })

                }

            }

        })
    })

}

