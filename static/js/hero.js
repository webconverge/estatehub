

/*

    --hero--

*/

export default function hero(){

    const hero = document.querySelector(".hero")

    const heroBg = document.querySelector(".hero-bg")

    heroBg.style.top =  - hero.getBoundingClientRect().top * 0.6 + "px"

    window.addEventListener("scroll", () => {

        heroBg.style.top =  - hero.getBoundingClientRect().top * 0.6 + "px"

    })

}


