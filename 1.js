const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  modeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
