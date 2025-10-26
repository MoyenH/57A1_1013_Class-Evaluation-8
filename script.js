// Navbar background change on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for contacting us!');
});
