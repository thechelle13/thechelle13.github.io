
const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <div class="welcome-container">
        <h1>
            <span class="welcome-title">Welcome </span>
            <span>to</span>
            <span>Community Pets</span>
        </h1>
        <div class="dog-images">
            <img class="app-logo" src="../assets/IMG_1440.jpeg" alt="Sleepy Doggy" />
        </div>
        <div class="welcome-about">
            <h2>A practice static site built with Github Pages to show a simple deploy.</h2>
        </div>
        <div class="form"> 
            <section class="form-group">
                <!-- Your form elements go here -->
            </section> 
        </div>
    </div>
`;

mainContainer.innerHTML = applicationHTML;


