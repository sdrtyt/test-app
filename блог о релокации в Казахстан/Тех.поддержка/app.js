// Get all the navigation links
const links = document.querySelectorAll('nav a');

// Add a click event listener to each link
links.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();
    
    // Get the section ID from the href attribute
    const sectionId = link.getAttribute('href');
    
    // Scroll to the corresponding section
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
