function About() {
    return `
        <div class="welcome-container">
            <h2>About this site:</h2>
            <p style="font-size: 20px;">This static site was created using HTML, CSS, and JavaScript and deployed via GitHub Pages. The journey of production involved challenges, particularly in remembering the basics and understanding how each component communicates. These concepts are the foundations of modern technologies such as React.</p>
            <p style="font-size: 20px;">While React offers numerous benefits, such as component reusability and a more organized structure, getting back to the basics and understanding fundamental concepts was the goal of this exercise.</p>
            <p style="font-size: 20px;">Despite not utilizing React or other modern frameworks, this site aims to demonstrate the power of traditional web technologies through continuous practice and exploration.</p>
       
            <h2> Current Projects:</h2>
            
            <div>
                <h3>Weather App:</h3>
                <p style="font-size: 20px;">A project built in React using JS, HTML and Tailwind to create a working app that fetches the weather based on the zip code entered by the user.  The app then reaches out to RapidAPI to retrieve the weather for that zip code. The app is operational but not deployed. The link to explore the code on GitHub for this project is <a href="https://github.com/thechelle13/weather-client">https://github.com/thechelle13/weather-client</a></p>
            </div>

            <div>
                <h3>Personal Planner Client and API:</h3>
                <p style="font-size: 20px;">A team collaboration using React, JS, Tailwind, Python and Django to create a Full Stack project. This project is in production and has plans to deploy on Digital Ocean. The GitHub link to explore this project is at <a href="https://github.com/thechelle13/PersonalPlannerClient">https://github.com/thechelle13/PersonalPlannerClient</a>.  Stay tuned for deployment of this app coming soon.</p>
            </div>

            <div>
                <h3>TechPower Client and API:</h3>
                <p style="font-size: 20px;">A Full Stack project using React, JS, Tailwind, Python and Django to create a modern well-rounded project. This project is complete and is currently being deployed on Digital Ocean. The GitHub link to the code for the client side is <a href="https://github.com/thechelle13/tech-client">https://github.com/thechelle13/tech-client</a>, and for the API is <a href="https://github.com/thechelle13/tech-api">https://github.com/thechelle13/tech-api</a>. The active deployed Client side is <a href="https://tech-client-er3ag.ondigitalocean.app/">https://tech-client-er3ag.ondigitalocean.app/</a>. However, please note that the backend API is still under development. Once completed, the application will be fully functional. Stay tuned for further updates.</p>
            </div>
           
        </div>
    `;
}
