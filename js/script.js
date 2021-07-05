// SHOW NAVBAR MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
    });
  }
}
showMenu("nav-menu", "nav-toggle");

// REMOVE NAVBAR MENU WHEN WE CLICK NAV-LINK
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// ADD NAVBAR BACKGROUND WHEN WE SCROLL DOWN WINDOW
const scrollY = window.pageYOffset;
function scrollActive() {
  const header = document.getElementById("header");

  this.scrollY >= 100
    ? header.classList.add("scroll-active")
    : header.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollActive);
