const mainContainer = document.querySelector("#container");

// Define the navigateTo function
function navigateTo(section) {
    switch (section) {
        case 'home':
            mainContainer.innerHTML = Home();
            break;
        case 'about':
            mainContainer.innerHTML = About();
            break;
        default:
            console.log('Invalid section');
    }
}

// // Create the Navbar and append it to the mainContainer
// mainContainer.appendChild(Navbar());

// // Initially display the Home section
// mainContainer.innerHTML += Home();

// Initially display the Home section
mainContainer.innerHTML += Home();

// Create the Navbar and append it to the mainContainer
mainContainer.appendChild(Navbar());


