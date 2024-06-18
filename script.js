const cursor = document.querySelector('.custom-cursor');
window.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});



document.addEventListener('DOMContentLoaded', function () {
  var popup = document.getElementById('popup');
  var closeButton = document.querySelector('.close-button');

  // Show the popup when the page loads
  popup.style.display = 'block';

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', function () {
      popup.style.display = 'none';
  });

  // Close the popup when the user clicks anywhere outside of the popup content
  window.addEventListener('click', function (event) {
      if (event.target == popup) {
          popup.style.display = 'none';
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu-item');
  const submenuItems = document.querySelectorAll('.submenu-item');
  const contentSections = document.querySelectorAll('.content-section');

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains('submenu')) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
      contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === target) {
          section.classList.add('active');
        }
      });
    });
  });

  submenuItems.forEach(item => {
    item.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === target) {
          section.classList.add('active');
        }
      });
    });
  });
});
