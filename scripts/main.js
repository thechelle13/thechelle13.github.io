
const mainContainer = document.querySelector("#container");

// Initially display the Home section
mainContainer.innerHTML += Navbar() + Home();

// Create the Navbar and append it to the mainContainer
mainContainer.appendChild(Navbar());

