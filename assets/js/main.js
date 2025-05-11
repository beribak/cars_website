window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Dark background when scrolled
  } else {
    navbar.style.backgroundColor = 'transparent'; // Transparent background at the top
  }
});

document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("navbar").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
