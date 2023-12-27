const about = document.getElementById("about");
const aboutMenu = document.getElementById("aboutMenu");

about.addEventListener("click", () => {
    aboutMenu.classList.toggle("hidden");
    aboutMenu.classList.toggle("visible");
});

window.addEventListener("click", (event) => {
    if (!about.contains(event.target) && !aboutMenu.contains(event.target)) {
        aboutMenu.classList.add("hidden");
        aboutMenu.classList.remove("visible");
    }
});