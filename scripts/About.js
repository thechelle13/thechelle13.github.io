function About() {
    return `
        <div class="about-container">
            <div class="section">
                <h1>About this site:</h1>
                <p>This static site was created using HTML, CSS, and JavaScript and deployed via GitHub Pages. The journey of production involved challenges, particularly in remembering the basics and understanding how each component communicates. These concepts are the foundations of modern technologies such as React.</p>
                <p>While React offers numerous benefits, such as component reusability and a more organized structure, getting back to the basics and understanding fundamental concepts was the goal of this exercise.</p>
                <p>Despite not utilizing React or other modern frameworks, this site aims to demonstrate the power of traditional web technologies through continuous practice and exploration.</p>
            </div>

            <div class="section">
                <h1>Current Projects:</h1>
                <div class="project">
                    <h3>Weather App:</h3>
                    <ul>
                        <li>A project built in React using JS, HTML, and Tailwind to create a working app that fetches the weather based on the zip code entered by the user.</li>
                        <li>The app then reaches out to RapidAPI to retrieve the weather for that zip code.</li>
                        <li>The app is operational but not deployed.</li>
                        <li>The link to explore the code on GitHub for this project is <a href="https://github.com/thechelle13/weather-client" class="project-link">https://github.com/thechelle13/weather-client</a>.</li>
                    </ul>
                </div>

                <div class="project">
                    <h3>Personal Planner Client and API:</h3>
                    <ul>
                        <li>A team collaboration using React, JS, Tailwind, Python, and Django to create a Full Stack project.</li>
                        <li>This project is in production and has plans to deploy on Digital Ocean.</li>
                        <li>The GitHub link to explore this project is at <a href="https://github.com/thechelle13/PersonalPlannerClient" class="project-link">https://github.com/thechelle13/PersonalPlannerClient</a>.</li>
                    </ul>
                </div>

                <div class="project">
                    <h3>TechPower Client and API:</h3>
                    <ul>
                        <li>A Full Stack project using React, JS, Tailwind, Python, and Django to create a modern well-rounded project.</li>
                        <li>This project is in progress of being deployed on Digital Ocean.</li>
                        <li>The GitHub link to the code for the client side is <a href="https://github.com/thechelle13/tech-client" class="project-link">https://github.com/thechelle13/tech-client</a>, and for the API is <a href="https://github.com/thechelle13/tech-api" class="project-link">https://github.com/thechelle13/tech-api</a>.</li>
                        <li>The active deployed site is <a href="https://tech-client-er3ag.ondigitalocean.app/" class="project-link">https://tech-client-er3ag.ondigitalocean.app/</a>.</li>
                        <li>Please note that the site is still under construction. Once completed, the application will be fully functional.</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}
