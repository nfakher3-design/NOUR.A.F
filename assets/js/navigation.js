/* ==========================================
   NOUR.A.F
   Navbar Behaviour + Component Loading
========================================== */


/* ==========================
   Load Components (navbar, footer, loader)
========================== */

async function loadComponent(id, file){

    const container = document.getElementById(id);

    if(!container) return;

    const isGitHubPages = window.location.hostname.includes("github.io");

    let basePath;

    if(isGitHubPages){

        basePath = "/nour-a-f/";

    }else{

        const parts = window.location.pathname.split("/").filter(Boolean);

        if(parts.length && parts[parts.length - 1].includes(".")){
            parts.pop();
        }

        const depth = parts.length;
        basePath = depth === 0 ? "" : "../".repeat(depth);

    }

    try{

        const response = await fetch(`${basePath}components/${file}`);
        container.innerHTML = await response.text();

    }catch(error){

        console.error(`${file} could not be loaded.`, error);

    }

}


async function loadAllComponents(){

    await loadComponent("navbar", "navbar.html");
    await loadComponent("footer", "footer.html");
    await loadComponent("loader", "loading.html");

    window.dispatchEvent(new Event("componentsLoaded"));

}


loadAllComponents();


/* ==========================
   Scroll Glass Effect
========================== */

function navbarScroll(){

    const header = document.querySelector(".header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){
            header.classList.add("scrolled");
        }else{
            header.classList.remove("scrolled");
        }

    });

}


/* ==========================
   Mobile Menu
========================== */

function mobileMenu(){

   document.addEventListener("click", (e) => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) return;

    const clickedMenuBtn = e.target.closest(".menu-btn");
    const clickedInsideMenu = e.target.closest(".nav-links");

    if(clickedMenuBtn){

        navLinks.classList.toggle("mobile-open");
        menuBtn.classList.toggle("active");

    } else if(!clickedInsideMenu && navLinks.classList.contains("mobile-open")){

        navLinks.classList.remove("mobile-open");
        menuBtn.classList.remove("active");

    }

});

}


/* ==========================
   Initialize
========================== */

window.addEventListener("DOMContentLoaded",()=>{

    navbarScroll();
    mobileMenu();

});