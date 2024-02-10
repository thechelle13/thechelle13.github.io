// function Navbar() {
//     return `
//         <nav class="navbar">
//             <ul>
//                 <li><a href="#" onclick="navigateTo('home')">Home</a></li>
//                 <li><a href="#" onclick="navigateTo('about')">About</a></li>
//             </ul>
//         </nav>
//     `;
// }

function Navbar() {
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar');

    const ul = document.createElement('ul');

    const homeLi = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        navigateTo('home');
    });
    homeLi.appendChild(homeLink);

    const aboutLi = document.createElement('li');
    const aboutLink = document.createElement('a');
    aboutLink.href = '#';
    aboutLink.textContent = 'About';
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        navigateTo('about');
    });
    aboutLi.appendChild(aboutLink);

    ul.appendChild(homeLi);
    ul.appendChild(aboutLi);

    navbar.appendChild(ul);

    return navbar;
}






