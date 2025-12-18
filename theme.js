// theme.js
// This script runs early to prevent a flash of the wrong theme.

(function() {
  try {
    const rootElement = document.documentElement; // Target <html> tag
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      rootElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      rootElement.classList.remove('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no theme is saved, use the OS preference
      rootElement.classList.add('dark');
    }
  } catch (e) {
    console.error('Error applying theme from localStorage', e);
  }
})();
