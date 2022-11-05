const NavLinks = document.querySelector(".navlinks");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = NavLinks.getAttribute("data-visible");

if(visibility === "false") {
  NavLinks.setAttribute('data-visible', true);
  navToggle.setAttribute('aria-expanded', true);
} else if(visibility === "true") {
  NavLinks.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
}
});