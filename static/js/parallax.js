

/*

    --parallax--

    data : [
        {
            image : ref,
            wrapper : ref
        },

        {
            image : ref,
            wrapper : ref
        },

        ... 
    ]

*/

export default function parallax(data){

    data.forEach(item => {

        item.image.style.top =  - item.wrapper.getBoundingClientRect().top * 0.6 + "px"    
    })
    
    window.addEventListener("scroll", () => {

        data.forEach(item =>{

            item.image.style.top =  - item.wrapper.getBoundingClientRect().top * 0.6 + "px"

        })

    })
}


