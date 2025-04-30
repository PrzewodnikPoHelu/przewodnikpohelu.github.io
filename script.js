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

  // Cookie consent banner
  if (cookieBanner && acceptCookies) {
    const hasConsent = localStorage.getItem("cookiesAccepted");

    if (!hasConsent) {
      cookieBanner.style.display = "flex";
      cookieBanner.classList.add("show-banner"); // for fade-in effect
    }

    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.classList.remove("show-banner");

      // Hide after transition
      setTimeout(() => {
        cookieBanner.style.display = "none";
      }, 300);
    });
  }

  // Privacy policy overlay
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
