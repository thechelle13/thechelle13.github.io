
function navigateTo(section) {
    switch (section) {
        case 'home':
            // Replace the content of mainContainer with Navbar and Home content
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



const mainContainer = document.querySelector("#container");

// Initially display the Home section
mainContainer.innerHTML += Home();

// Create the Navbar and append it to the mainContainer
mainContainer.appendChild(Navbar());

