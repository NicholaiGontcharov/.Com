window.addEventListener('DOMContentLoaded', () => {
  console.log('✅ navbar.js loaded and DOM is ready');

  const header = document.getElementById('main-header');
  if (header) {
    console.log('✅ #main-header found');
    header.classList.add('visible');
  } else {
    console.warn('⚠️ #main-header not found in the DOM');
  }
});
