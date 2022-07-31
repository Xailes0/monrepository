const hamburgerToggler = document.querySelector(".hamburger")
const navLinksContainer = document.querySelector(".main-navlinks");
const section = document.querySelector(".navlinks-container")
const toggleNav = () => {
  hamburgerToggler.classList.toggle("open")
  navLinksContainer.classList.toggle("open")
  section.classList.toggle("open")
}
hamburgerToggler.addEventListener("click", toggleNav)





document.querySelector('nav').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}