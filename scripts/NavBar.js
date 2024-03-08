
function navigateTo(section) {
    switch (section) {
        case 'home':
            mainContainer.innerHTML = Navbar() + Home();
            break;
        case 'about':
            mainContainer.innerHTML = Navbar() + About();
            break;
        case 'resume': 
            mainContainer.innerHTML = Navbar() + Resume();
            break;
        default:
            console.log('Invalid section');
    }
}



function Navbar() {
    return `
    <nav class="navbar">
    <ul class="nav-links">
        <li><a href="#" onclick="navigateTo('home')">Home</a></li>
        <li><a href="#" onclick="navigateTo('about')">About</a></li>
        <li><a href="#" onclick="navigateTo('resume')">Resume</a></li>
    </ul>
</nav>
    `;
}








