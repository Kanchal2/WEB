function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        menu.classList.remove('show');
    }
});