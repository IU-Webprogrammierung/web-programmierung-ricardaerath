// JavaScript zum Ein- und Ausblenden des Navigation-Menüs
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

// Event-Listener für das Burger-Menü
document.getElementById('burger-menu').addEventListener('click', toggleMenu);
