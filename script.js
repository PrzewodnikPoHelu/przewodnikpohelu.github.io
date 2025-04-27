document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuToggle");
  const navbarMenu = document.getElementById("navbarMenu");

  // Toggle menu (rozwijanie i zwijanie)
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    navbarMenu.classList.toggle("open");
  });

  // Cookie banner
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');

  // Sprawdzamy, czy użytkownik zaakceptował ciasteczka (z localStorage)
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'block'; // Jeśli nie zaakceptowane, pokazujemy banner
  }

  // Po kliknięciu "OK", zapisujemy akceptację w localStorage i ukrywamy banner
  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true'); // Zapisz akceptację ciasteczek
    cookieBanner.style.display = 'none'; // Ukryj banner
  });

  // Polityka overlay
  const policyOverlay = document.getElementById('policyOverlay');
  const moreInfoLink = document.getElementById('moreInfoLink');
  const closePolicy = document.getElementById('closePolicy');

  moreInfoLink.addEventListener('click', (e) => {
    e.preventDefault();
    policyOverlay.style.display = 'flex'; // Pokazujemy overlay z polityką prywatności
  });

  closePolicy.addEventListener('click', () => {
    policyOverlay.style.display = 'none'; // Zamykanie overlay
  });

  // Efekt parallax scroll
  window.addEventListener('scroll', function () {
    const mainElement = document.querySelector('.main');
    const scrollPosition = window.scrollY;

    // Ustawienie tła na podstawie scrolla
    if (window.innerWidth <= 768) {
      mainElement.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
    }
  });
});
