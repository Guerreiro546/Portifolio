// Animação ao rolar a página
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");

    sections.forEach(sec => {
        const windowHeight = window.innerHeight;
        const sectionTop = sec.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});