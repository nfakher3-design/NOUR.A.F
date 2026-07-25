const themes = {

   architecture: {
    primary: "#513745",
    bg: "#EDE7E9",
    surface: "#513745",
    text: "#1E1E1E",
    textLight: "#6F6F6F"
},

art: {
    primary: "#270505",
    bg: "#EAEAEA",
    surface: "#270505",
    text: "#1E1E1E",
    textLight: "#6F6F6F"
},

  informatics: {
    primary: "#EAEAEA",
    bg: "#121212",
    surface: "#1E1E1E",
    text: "#EAEAEA",
    textLight: "#8A8A8A"
},


default: {
    primary: "#888888",
    bg: "#111111",
    surface: "#1a1a1a",
    text: "#EAEAEA",
    textLight: "#8A8A8A"
},

};

let currentTheme = "";

function applyTheme(name){

    if(currentTheme === name) return;

    currentTheme = name;

    const theme = themes[name];

    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--bg", theme.bg);
    document.documentElement.style.setProperty("--surface", theme.surface);
    document.documentElement.style.setProperty("--text", theme.text);
    document.documentElement.style.setProperty("--text-light", theme.textLight);

}

applyTheme("default");


const worldCards = document.querySelectorAll(".world-card");

function updateActiveWorld(){

    const center = window.innerHeight / 2;
    let matched = null;

    worldCards.forEach(card => {

        const rect = card.getBoundingClientRect();
        const isCenter = rect.top <= center && rect.bottom >= center;

        card.classList.toggle("active", isCenter);

        if(isCenter){
            matched = card;
        }
    });

    if(matched){
        applyTheme(matched.dataset.theme);
    } else {
        applyTheme("default");
    }
}

window.addEventListener("scroll", updateActiveWorld);
window.addEventListener("DOMContentLoaded", updateActiveWorld);


