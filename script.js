document.addEventListener("DOMContentLoaded", () => {
  const menuIcon      = document.getElementById("menuToggle");
  const navbarMenu    = document.getElementById("navbarMenu");
  const cookieBanner  = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");
  const policyOverlay = document.getElementById("policyOverlay");
  const moreInfoLink  = document.getElementById("moreInfoLink");
  const closePolicy   = document.getElementById("closePolicy");

  // Toggle menu
  if (menuIcon && navbarMenu) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("open");
      navbarMenu.classList.toggle("open");
    });
  }

  // Cookie banner
  if (cookieBanner && acceptCookies) {
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "block";
    }

    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.display = "none";
    });
  }

  // Polityka overlay
  if (moreInfoLink && policyOverlay && closePolicy) {
    moreInfoLink.addEventListener("click", (e) => {
      e.preventDefault();
      policyOverlay.style.display = "flex";
    });

    closePolicy.addEventListener("click", () => {
      policyOverlay.style.display = "none";
    });
  }
});
