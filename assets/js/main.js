window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar-custom');
  const links = document.querySelectorAll('.navbar-custom a'); // Select all links inside the navbar
  const logo = document.querySelector('.logo'); // Select the logo

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255)'; // White background with 90% transparency
    navbar.style.color = '#000'; // Change navbar text color to black
    links.forEach(link => link.style.color = '#000'); // Change link colors to black
    if (logo) logo.style.color = '#000'; // Change logo color to black
  } else {
    navbar.style.backgroundColor = 'transparent'; // Transparent background at the top
    navbar.style.color = '#fff'; // Change navbar text color to white
    links.forEach(link => link.style.color = '#fff'); // Change link colors to white
    if (logo) logo.style.color = '#fff'; // Change logo color to white
  }
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

// mobile menu toggle 
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const socialIcons = document.querySelector(".social-icons");
  const menuIcon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Toggle visibility of nav links
    socialIcons.classList.toggle("active"); // Toggle visibility of social icons

    // Toggle between burger menu and "X" icon
    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });
});