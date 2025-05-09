window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Dark background when scrolled
  } else {
    navbar.style.backgroundColor = 'transparent'; // Transparent background at the top
  }
});