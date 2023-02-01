import './techskills.css';
import './defaults.css';

const Skills = () => {
    return (
        <div id="skills" class="skills red Background-White">
        <div class="blurdiv">
            <div class="temp_wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    <linearGradient id="Gradient1">
                        <stop class="stop1" offset="0%" />
                        <stop class="stop2" offset="20%" />
                        <stop class="stop3" offset="80%" />
                        <stop class="stop4" offset="100%" />
                    </linearGradient>
                </svg>
            </div>
            <h1 class = "Section-Title" id="techskills">Technical <span id="skillmark">Skills</span></h1>
            <div class="container">
                <div class="skills-icons">
                    <img src="/pics/GitHub-Mark.png"/>
                    <p class="skill-name">GitHub</p>
                </div>
                <div class="skills-icons">
                    <img src="/pics/HTML5_Badge_512.png"/>
                    <p class="skill-name">HTML</p>
                </div>
                <div class="skills-icons">
                    <img src="/pics/CSS3_logo.svg.png"/>
                    <p class="skill-name">CSS</p>
                </div>
                <div class="skills-icons">
                    <img src="/pics/React-icon.svg.png"/>
                    <p class="skill-name">React</p>
                </div>
                <div class="skills-icons">
                    <img src="/pics/Python-logo-notext.svg.png"/>
                    <p class="skill-name">Python</p>
                </div>
                <div class="skills-icons">
                    <img src="/pics/Fortnite_F_lettermark_logo.png"/>
                    <p class="skill-name">Fortnite</p>
                </div>
                {/* Keep adding divs to increase the line :) */}
            </div>
            <div class="temp_wave_bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    <linearGradient id="Gradient1">
                        <stop class="stop1" offset="0%" />
                        <stop class="stop2" offset="20%" />
                        <stop class="stop3" offset="80%" />
                        <stop class="stop4" offset="100%" />
                    </linearGradient>
                </svg>
            </div>
            <div class="wave-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            </div>
        </div>
    );
}
export default Skills;