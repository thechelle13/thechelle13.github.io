function Navbar() {
    return `
    <nav class="navbar">
        <button class="menu-toggle" onclick="toggleMenu()">☰</button>
        <ul class="nav-links">
            <li><a href="#" onclick="navigateTo('home')">Home</a></li>
            <li><a href="#" onclick="navigateTo('about')">About</a></li>
            <li><a href="#" onclick="navigateTo('resume')">Resume</a></li>
        </ul>
    </nav>
    `;
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
