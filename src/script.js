function toggleMenu(action) {
  var menu = document.getElementById('menu');
  var menuClose = document.getElementById('menu-close');
  var menuOpen = document.getElementById('menu-open');
  if (action === 'OPEN') {
    menu.style.display = 'block';
    menuClose.style.display = 'block';
    menuOpen.style.display = 'none';
  }
  if (action === 'CLOSE') {
    menu.style.display = 'none';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
  }
}
