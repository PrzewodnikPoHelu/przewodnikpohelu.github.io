document.addEventListener("DOMContentLoaded", () => {
  const menuIcon      = document.getElementById("menuToggle");
  const navbarMenu    = document.getElementById("navbarMenu");
  const cookieBanner  = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");
  const policyOverlay = document.getElementById("policyOverlay");
  const moreInfoLink  = document.getElementById("moreInfoLink");
  const closePolicy   = document.getElementById("closePolicy");

  // Toggle menu
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    navbarMenu.classList.toggle("open");
  });

  // Cookie banner
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block";
  }
  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });

  // Polityka overlay
  moreInfoLink.addEventListener("click", (e) => {
    e.preventDefault();
    policyOverlay.style.display = "flex";
  });
  closePolicy.addEventListener("click", () => {
    policyOverlay.style.display = "none";
  });

  // Parallax na .parallax
  const images = document.querySelectorAll('.parallax');
  new simpleParallax(images, {
    scale: 1.3,
    delay: 0.1,
    transition: 'cubic-bezier(0,0,0,1)'
  });
});
