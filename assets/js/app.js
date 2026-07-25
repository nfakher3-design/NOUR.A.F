window.addEventListener("componentsLoaded",()=>{

    const loader = document.querySelector(".loader");


    setTimeout(()=>{

        if(loader){

            loader.classList.add("hide");

        }

    },1200);

});



/* ==========================================
   HERO PARALLAX
========================================== */

window.addEventListener("scroll", function(){

    const heroImage = document.querySelector(".hero-background img");

    if (!heroImage) return;

    const scrollY = window.scrollY;

    heroImage.style.transform =
        "scale(1.05) translateY(" + (scrollY * 0.15) + "px)";

});