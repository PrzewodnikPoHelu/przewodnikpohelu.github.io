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

  // Cookie consent with expiration
  if (cookieBanner && acceptCookies) {
    const consentData = JSON.parse(localStorage.getItem("cookieConsent"));
    const now = new Date();

    const isConsentValid = consentData && new Date(consentData.expiresAt) > now;

    if (!isConsentValid) {
      cookieBanner.style.display = "flex";
      cookieBanner.classList.add("show-banner");
    }

    acceptCookies.addEventListener("click", () => {
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

      localStorage.setItem("cookieConsent", JSON.stringify({
        accepted: true,
        expiresAt: oneYearFromNow.toISOString()
      }));

      cookieBanner.classList.remove("show-banner");
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
