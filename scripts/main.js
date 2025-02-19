const mainContainer = document.querySelector("#container");

// Initially display the Home section
mainContainer.innerHTML = Navbar() + Home();
setupNavigation();

function navigateTo(section) {
    // Remove active class from all links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add fade-out effect
    mainContainer.classList.add('fade-out');
    
    setTimeout(() => {
        switch (section) {
            case 'home':
                mainContainer.innerHTML = Navbar() + Home();
                document.getElementById('homeLink').classList.add('active');
                break;
            case 'about':
                mainContainer.innerHTML = Navbar() + About();
                document.getElementById('aboutLink').classList.add('active');
                break;
            case 'resume': 
                mainContainer.innerHTML = Navbar() + Resume();
                document.getElementById('resumeLink').classList.add('active');
                break;
            default:
                console.log('Invalid section');
                mainContainer.innerHTML = Navbar() + Home();
                document.getElementById('homeLink').classList.add('active');
        }
        
        // Setup navigation again for the new content
        setupNavigation();
        
        // Add fade-in effect after content change
        mainContainer.classList.remove('fade-out');
        mainContainer.classList.add('fade-in');
        
        // Reset animation classes after they complete
        setTimeout(() => {
            mainContainer.classList.remove('fade-in');
        }, 800);
        
    }, 300); // Short delay for fade-out effect
    
    // Update URL hash for browser history
    window.location.hash = section;
}

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const section = window.location.hash.substring(1) || 'home';
    navigateTo(section);
});

// Add this to your CSS
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-out {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    </style>
`);