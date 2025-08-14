// Smooth scrolling
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close menu when link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Event registration form
document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const eventSelected = document.getElementById('event').value;

  const messageEl = document.getElementById('formMessage');

  if (name && email && eventSelected) {
    messageEl.textContent = `Thank you, ${name}! You have registered for the "${eventSelected}" event.`;
    messageEl.style.color = "green";
    this.reset();
  } else {
    messageEl.textContent = "Please fill in all fields.";
    messageEl.style.color = "red";
  }
});
