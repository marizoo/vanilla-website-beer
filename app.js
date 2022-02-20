const iconToggle = document.querySelector("#nav-toggle");
const iconClose = document.querySelector("#nav-close");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav__ul-li");

// show Menu when "iconToggle" is clicked
iconToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
});

//  close menu when "iconCLose" is clicked
iconClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});

// Close menu when any of the menu's links are clicked
function linkAction() {
    navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => link.addEventListener("click", linkAction));
