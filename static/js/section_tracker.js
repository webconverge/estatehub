


/*

    --section tracker--

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

export default function sectionTracker(data, threshold){

    let current = null

    window.addEventListener("scroll", ()=>{

        let temp = null

        data.forEach(item => {

            const rect = item.section.getBoundingClientRect()

            if(rect.top <= threshold){

                if(temp == null){

                    temp = item
                }
                else if(rect.top > temp.section.getBoundingClientRect().top){

                    temp = item
                }
            }
        })

        if(current){

            current.header.classList.remove("header-style")
        }

        current = temp

        current.header.classList.add("header-style")
    })

}


