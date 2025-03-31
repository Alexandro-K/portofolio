// Navbar Fixed saat Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const backToTop = document.querySelector('#toTop');

  if (window.scrollY > 50) {
    header.classList.add("navbar-fixed");
    backToTop.classList.remove('hidden');
  } else {
    header.classList.remove("navbar-fixed");
    backToTop.classList.add('hidden');
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

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
})

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
})

// Memindahkan posisi toggle sesuai mode
if ("dark",localStorage.theme === "dark" ||(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)){
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}