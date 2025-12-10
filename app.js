// Navbar transparente → sólido
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if(window.scrollY > 50){
        header.style.background = "#111";
    } else {
        header.style.background = "#222";
    }
});

// Animación suave al hacer clic en el menú
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));
        if(target){
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
