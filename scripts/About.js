function About() {
    return `
        <div class="about-container">
            <!-- Introduction Section -->
            <div class="section">
                <h1>About This Portfolio</h1>
                <p>This portfolio showcases my skills and projects as a web developer. Built using HTML, CSS, and JavaScript, and deployed via GitHub Pages, this site reflects my ability to create professional and functional websites from scratch.</p>
                <p>The journey of creating this site highlights my foundational knowledge and my commitment to revisiting core web technologies to strengthen my expertise beyond frameworks like React.</p>
            </div>

            <!-- Projects Section -->
            <div class="section">
                <h1>Highlighted Projects</h1>

                <!-- Weather App -->
                <div class="project">
                    <h3>Weather App</h3>
                    <ul>
                        <li>React-based app fetching real-time weather using RapidAPI.</li>
                        <li>Features a clean UI styled with Tailwind CSS.</li>
                        <li>
                            <strong>GitHub:</strong> 
                            <a href="https://github.com/thechelle13/weather-client" class="project-link">weather-client</a>
                        </li>
                        <li>
                            <strong>Live Demo:</strong> 
                            <a href="https://weather-8usah.ondigitalocean.app/" class="project-link">View App</a>
                        </li>
                    </ul>
                </div>

                <!-- Personal Planner -->
                <div class="project">
                    <h3>Personal Planner Client & API</h3>
                    <ul>
                        <li>Full Stack project built with React, Django, and Tailwind CSS.</li>
                        <li>Collaboration-focused app for managing personal tasks and schedules.</li>
                        <li>
                            <strong>GitHub:</strong> 
                            <a href="https://github.com/thechelle13/PersonalPlannerClient" class="project-link">Client</a>, 
                            <a href="https://github.com/thechelle13/PersonalPlannerAPI" class="project-link">API</a>
                        </li>
                        <li>
                            <strong>Live Demo:</strong> 
                            <a href="https://personal-planner-hryyx.ondigitalocean.app/" class="project-link">View App</a>
                        </li>
                    </ul>
                </div>

                <!-- Bake Shop -->
                <div class="project">
                    <h3>Bake Shop</h3>
                    <ul>
                        <li>Front-end app showcasing a fictional bake shop’s products and locations.</li>
                        <li>Created using React and Tailwind CSS for a modern and engaging user experience.</li>
                        <li>
                            <strong>GitHub:</strong> 
                            <a href="https://github.com/thechelle13/bake-shop" class="project-link">bake-shop</a>
                        </li>
                        <li>
                            <strong>Live Demo:</strong> 
                            <a href="https://offplumbakeshop-sty2x.ondigitalocean.app/" class="project-link">View App</a>
                        </li>
                    </ul>
                </div>

                <!-- Bake Shop (No-Code) -->
                <div class="project">
                    <h3>Bake Shop (No-Code)</h3>
                    <ul>
                        <li>Built with Google Sites, providing a customizable and user-friendly interface for non-technical users.</li>
                        <li>
                            <strong>Live Demo:</strong> 
                            <a href="https://offplumbakeshop.square.site/" class="project-link">View Site</a>
                        </li>
                    </ul>
                </div>

                <!-- TechPower -->
                <div class="project">
                    <h3>TechPower Client & API</h3>
                    <ul>
                        <li>Full Stack project showcasing advanced features using React, Django, and Tailwind CSS.</li>
                        <li>
                            <strong>GitHub:</strong> 
                            <a href="https://github.com/thechelle13/tech-client" class="project-link">Client</a>, 
                            <a href="https://github.com/thechelle13/tech-api" class="project-link">API</a>
                        </li>
                        <li>
                            <strong>Live Demo:</strong> 
                            <a href="https://tech-client-er3ag.ondigitalocean.app/" class="project-link">View App</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}
