// Example script: Toggle dark mode manually with a button

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");
    });
  }
});