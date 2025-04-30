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

  // --- Cookie Consent with Expiry ---
  if (cookieBanner && acceptCookies) {
    try {
      const consent = JSON.parse(localStorage.getItem("cookieConsent"));
      const now = new Date();

      if (!consent || new Date(consent.expiresAt) <= now) {
        cookieBanner.style.display = "flex";
      }

      acceptCookies.addEventListener("click", () => {
        const expiresAt = new Date();
        expiresAt.setFullYear(expiresAt.getFullYear() + 1); // 1 year from now

        localStorage.setItem("cookieConsent", JSON.stringify({
          accepted: true,
          expiresAt: expiresAt.toISOString()
        }));

        cookieBanner.style.display = "none";
      });
    } catch (err) {
      console.error("Cookie consent error:", err);
    }
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
