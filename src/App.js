import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects'
import Skills from './skills';
import Contact from './Contact'
import Particless from './Particles'
import './defaults.css';

function App() {
  return (
    <>
      <div>
        <div id="About" class="Background-White">
          <AboutMe />
        </div>
        <div id="Projects" class="Background-Particles">
          <Particless/>
          <Projects />
        </div>
        <div id="Skills" class="Background-White">
          <Skills />
        </div>
        <div id="Contact" class="Background-Blue">
          <Contact />
        </div>
          <div class="navbar">
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Skills">Skills</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </>
  );
}

export default App;
