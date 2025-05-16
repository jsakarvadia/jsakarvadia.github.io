// Dark/Light theme toggle
(function() {
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.getElementById('theme-toggle-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function getPreferredTheme() {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  document.addEventListener('DOMContentLoaded', function() {
    var theme = getPreferredTheme();
    setTheme(theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function() {
        var current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  });
})();
