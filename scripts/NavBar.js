
function navigateTo(section) {
    switch (section) {
        case 'home':
            
            mainContainer.innerHTML = Navbar() + Home();
            break;
        case 'about':
            // Replace the content of mainContainer with Navbar and About content
            mainContainer.innerHTML = Navbar() + About();
            break;
        default:
            console.log('Invalid section');
    }
}


function Navbar() {
    return `
        <nav class="navbar">
            <ul>
                <li><a href="#" onclick="navigateTo('home')">Home</a></li>
                <li><a href="#" onclick="navigateTo('about')">About</a></li>
            </ul>
        </nav>
    `;
}








