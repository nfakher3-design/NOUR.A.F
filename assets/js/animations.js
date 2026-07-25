/* ==========================================
   WORLD CARDS FOCUS + THEME
========================================== */


/*

const worldCards = document.querySelectorAll(".world-card");


const themeMap = {

    "architecture-card":"architecture",

    "art-card":"art",

    "info-card":"informatics"

};


const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        const card = entry.target;


        if(entry.isIntersecting){

            worldCards.forEach(item=>{
                item.classList.remove("active");
            });


            card.classList.add("active");


            const theme =
            themeMap[
                [...card.classList]
                .find(name => themeMap[name])
            ];


            if(theme){

                applyTheme(theme);

            }

        }


    });


},

{
    threshold:0.3
});


worldCards.forEach(card=>{

    observer.observe(card);

});  

*/


/* ==========================================
   WORLDS SECTION - BACKGROUND GRADIENT
========================================== */

function updateWorldsGradient(){

    const worldsSection = document.querySelector(".worlds");

    if(!worldsSection) return;

    const rect = worldsSection.getBoundingClientRect();
    const sectionHeight = worldsSection.offsetHeight - window.innerHeight;

    let progress = -rect.top / sectionHeight;
    progress = Math.min(Math.max(progress, 0), 1);

    const startColor = [229, 229, 229];
    const endColor = [18, 18, 18];

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);

    worldsSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}

window.addEventListener("scroll", updateWorldsGradient);
window.addEventListener("DOMContentLoaded", updateWorldsGradient);



/* ==========================================
   CONTACT - IGNORE BUTTON GAME
========================================== */

function initIgnoreButton(){

    const ignoreBtn = document.getElementById("ignoreBtn");

    if(!ignoreBtn) return;

    const parent = ignoreBtn.closest(".instagram-actions");

    function runAway(){

        const parentRect = parent.getBoundingClientRect();
        const btnRect = ignoreBtn.getBoundingClientRect();

        const maxX = parentRect.width - btnRect.width;
        const maxY = parentRect.height - btnRect.height;

        const newX = Math.random() * Math.max(maxX, 0);
        const newY = Math.random() * Math.max(maxY, 0);

        ignoreBtn.style.position = "absolute";
        ignoreBtn.style.left = newX + "px";
        ignoreBtn.style.top = newY + "px";

    }

    ignoreBtn.addEventListener("mouseenter", runAway);
    ignoreBtn.addEventListener("touchstart", (e)=>{
        e.preventDefault();
        runAway();
    });

}

window.addEventListener("DOMContentLoaded", initIgnoreButton);


/* ==========================================
   ART GALLERY - POP ON SCROLL
========================================== */

function initArtReveal(){

    const frames = document.querySelectorAll(".art-frame");

    if(frames.length === 0) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("in-view");

            }

        });

    },{

        threshold:0.3

    });

    frames.forEach(frame => observer.observe(frame));

}

window.addEventListener("DOMContentLoaded", initArtReveal);


/* ==========================================
   INFORMATICS - LIST REVEAL
========================================== */

function initInfoListReveal(){

    const items = document.querySelectorAll(".info-item");

    if(items.length === 0) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry, i)=>{

            if(entry.isIntersecting){

                setTimeout(()=>{

                    entry.target.classList.add("in-view");

                }, i * 100);

            }

        });

    },{

        threshold:0.3

    });

    items.forEach(item => observer.observe(item));

}

window.addEventListener("DOMContentLoaded", initInfoListReveal);


/* ==========================================
   IMAGE PROTECTION
========================================== */

function initImageProtection(){

    document.addEventListener("contextmenu", (e)=>{

        if(e.target.tagName === "IMG"){
            e.preventDefault();
        }

    });

    document.addEventListener("dragstart", (e)=>{

        if(e.target.tagName === "IMG"){
            e.preventDefault();
        }

    });

}

window.addEventListener("DOMContentLoaded", initImageProtection);


/* ==========================================
   SELECTED WORKS - REVEAL ON SCROLL
========================================== */

function initWorksReveal(){

    const items = document.querySelectorAll(".work-item");

    if(items.length === 0) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("in-view");

            }

        });

    },{

        threshold:0.2

    });

    items.forEach(item => observer.observe(item));

}

window.addEventListener("DOMContentLoaded", initWorksReveal);