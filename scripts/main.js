
const mainContainer = document.querySelector("#container");

const applicationHTML = `
    ${Navbar()}
    ${Home()}

`;

mainContainer.innerHTML = applicationHTML;

// const mainContainer = document.querySelector("#container");

// function renderPage(pageContent) {
//     mainContainer.innerHTML = pageContent;
// }

// function handleHashChange() {
//     const hash = window.location.hash;

//     switch (hash) {
//         case '#home':
//             renderPage(Home());
//             break;
//         case '#about':
//             renderPage(About());
//             break;
//         default:
//             renderPage(Home());
//     }
// }

// function attachEventListeners() {
//     const homeLink = document.querySelector("a[href='#home']");
//     const aboutLink = document.querySelector("a[href='#about']");

//     if (homeLink && aboutLink) {
//         homeLink.addEventListener("click", function (event) {
//             event.preventDefault();
//             renderPage(Home());
//             window.location.hash = 'home';
//         });

//         aboutLink.addEventListener("click", function (event) {
//             event.preventDefault();
//             renderPage(About());
//             window.location.hash = 'about';
//         });

//         // Listen for hash changes
//         window.addEventListener('hashchange', handleHashChange);
//     }
// }

// // Attach event listeners after the DOM and all resources are fully loaded
// window.onload = function () {
//     // Load the Home page by default
//     renderPage(Home());
// }