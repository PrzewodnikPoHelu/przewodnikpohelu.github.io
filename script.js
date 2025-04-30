document.addEventListener("DOMContentLoaded", () => {
  // Elements
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
    const consentRaw = localStorage.getItem("cookieConsent");

    let showBanner = true;

    if (consentRaw) {
      try {
        const consent = JSON.parse(consentRaw);
        const now = new Date();
        const expires = new Date(consent.expiresAt);

        if (consent.accepted && expires > now) {
          showBanner = false;
        }
      } catch (e) {
        console.warn("Invalid consent data", e);
      }
    }

    if (showBanner) {
      cookieBanner.style.display = "flex";
    }

    acceptCookies.addEventListener("click", () => {
      const expiresAt = new Date();
      expiresAt.setFullYear(expiresAt.getFullYear() + 1);

      localStorage.setItem("cookieConsent", JSON.stringify({
        accepted: true,
        expiresAt: expiresAt.toISOString()
      }));

      cookieBanner.style.display = "none";
    });
  }

  // --- Privacy Policy Modal ---
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
