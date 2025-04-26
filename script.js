document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuToggle");
  const navbarMenu = document.getElementById("navbarMenu");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    navbarMenu.classList.toggle("open");
  });
});
// Cookie banner
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');

if (!localStorage.getItem('cookiesAccepted')) {
  cookieBanner.style.display = 'block';
}

acceptCookies.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', 'true');
  cookieBanner.style.display = 'none';
});

// Polityka overlay
const policyOverlay = document.getElementById('policyOverlay');
const moreInfoLink = document.getElementById('moreInfoLink');
const closePolicy = document.getElementById('closePolicy');

moreInfoLink.addEventListener('click', (e) => {
  e.preventDefault();
  policyOverlay.style.display = 'flex';
});

closePolicy.addEventListener('click', () => {
  policyOverlay.style.display = 'none';
});
// Sprawdzamy, czy jest okno na urządzeniu mobilnym
if (window.innerWidth > 768) {
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Pozycja scrolla
    const mainElement = document.querySelector('.main');
    
    // Zmieniamy tło w zależności od przewijania
    mainElement.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  });
}
