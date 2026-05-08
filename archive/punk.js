const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update button text
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Normal'; // Text for dark mode
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'Punk it UP'; // Text for light mode
    localStorage.setItem('theme', 'light');
  }
});

// Check local storage on page load and set initial button text
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Normal'; // Set text if dark mode is saved
} else {
  themeToggle.textContent = 'Punk it UP'; // Set text if light mode is saved or no saved theme
}