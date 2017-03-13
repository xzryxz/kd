/**
 * Toggles the Menu.
 * @param {string} action If the Menu should be open or closed.
 */
function toggleMenu(action) {
    var menu = document.getElementById('menu');
    var menuClose = document.getElementById('menu-close');
    var menuOpen = document.getElementById('menu-open');
    switch (action) {
        case 'OPEN':
            menu.style.display = 'block';
            menuClose.style.display = 'block';
            menuOpen.style.display = 'none';
            break;
        case 'CLOSE':
            menu.style.display = 'none';
            menuClose.style.display = 'none';
            menuOpen.style.display = 'block';
            break;
        default:
            throw new Error('Unexpected.');
    }
}
