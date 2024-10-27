/**
 * Define Global Variables
 */
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');

console.log('Sections:', sections); // Check if sections are being selected
console.log('NavList:', navList);   // Check if navbar list is selected

/**
 * Helper Functions
 */

// Create a navigation item for each section
function createNavItem(section) {
  const navItem = document.createElement('li');
  navItem.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
  return navItem;
}

/**
 * Main Functions
 */

// Build the navigation menu dynamically
function buildNav() {
  sections.forEach((section) => {
    const navItem = createNavItem(section);
    navList.appendChild(navItem);
  });
  console.log('Navigation menu built'); // Check if the menu is built
}

// Add 'active' class to section in the viewport
function setActiveSection() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a[href="#${section.id}"]`);

    if (rect.top >= -50 && rect.top < 300) {
      section.classList.add('your-active-class');
      link.classList.add('active');
    } else {
      section.classList.remove('your-active-class');
      link.classList.remove('active');
    }
  });
}

/**
 * Event Listeners
 */

// Scroll to section on click
navList.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'A') {
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Set sections as active on scroll
document.addEventListener('scroll', setActiveSection);

// Build the menu when the page loads
document.addEventListener('DOMContentLoaded', buildNav);
