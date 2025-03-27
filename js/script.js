// Navbar Fixed saat Scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) { 
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
});

// Toggle Menu Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", (event) => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// Klik di luar menu untuk menutupnya
document.addEventListener("click", (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
});
