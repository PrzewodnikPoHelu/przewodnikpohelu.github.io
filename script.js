document.addEventListener("DOMContentLoaded", () => {
  const menuIcon      = document.getElementById("menuToggle");
  const navbarMenu    = document.getElementById("navbarMenu");
  const cookieBanner  = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");
  const policyOverlay = document.getElementById("policyOverlay");
  const moreInfoLink  = document.getElementById("moreInfoLink");
  const closePolicy   = document.getElementById("closePolicy");

  // --- Mobile Menu Toggle ---
  if (menuIcon && navbarMenu) {
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("open");
      navbarMenu.classList.toggle("open");
    });
  }

  // --- Cookie Consent ---
  if (cookieBanner && acceptCookies) {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      cookieBanner.style.display = "none";
    } else {
      cookieBanner.style.display = "flex";
    }

    acceptCookies.addEventListener("click", () => {
      // Save consent in localStorage with "accepted" status
      localStorage.setItem("cookieConsent", "accepted");
      cookieBanner.style.display = "none";
    });
  }

  // --- Privacy Policy Overlay ---
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
