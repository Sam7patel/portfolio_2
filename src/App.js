import React from 'react';
import './App.css';
import project1Image from './project1.png';
import project2Image from './project2.png';
import project3Image from './project3.png';
import profileImage from './blog-1.svg';


function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <h1 className="logo">  Samarth.dev</h1>
          <div className="menu-toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <ul className="navbar-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Front-End Developer</h1>
          <p className="hero-subtitle">
            Hi, I'm Samarth Patel. A passionate Front-end Developer currently learning MERN Stack development.<br></br>
            Based in Bharuch, India. 📍
          </p>
          <div className="hero-buttons">
            
            <a href="https://github.com/Sam7patel" className="button" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
            </a>
          </div>
        </div>
        <div className="hero-image"></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
        <div className="about-image">
            <img
              src={profileImage} 
              alt="Profile Image"
              className="rounded-image"
            />
          </div>
          <div className="about-text">
            <p>
              I'm a dedicated React developer with a passion for creating elegant, responsive web applications.
              With a strong foundation in HTML, CSS, and JavaScript, I bring web designs to life with a focus on user experience and performance.
            </p>
            <p>
              My goal is to build user-friendly and visually appealing websites, and I'm always eager to learn and adapt to new technologies.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}





function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-cards">
        <ProjectCard
  title="Simon Game"
  description="A fully functional web page built for all the 90's Simon game lover."
  technologies="HTML, CSS, JQUERY"
  image={project1Image} // Use the imported image variable
  link="https://sam7patel.github.io/Simon-Game/"
/>
<ProjectCard
  title="Drum-Kit Website"
  description="Drum-kit project which can be used by the users of Computer/Laptop through keyboard and mobile user by pressing the icons."
  technologies="HTML, CSS, JAVASCRIPT"
  image={project2Image} // Use the imported image variable
  link="https://sam7patel.github.io/Drum-kit/"
/>
<ProjectCard
  title="Logistic Company"
  description="A Logistic company for easy transport of household things and furniture during the house shifting."
  technologies="HTML, Bootstrap"
  image={project3Image} 
  link="https://sam7patel.github.io/Home-Shifting-Logistic-Company/"
/>

        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, technologies, image, link }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-tech">{technologies}</p>
      <a href={link} className="button" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-text">
          If you'd like to get in touch or collaborate on a project, please feel free to reach out to me 👇
        </p>
        
        <div className="contact-buttons">
                  <a href="mailto:samarthpatel734@gmail.com" className="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
          
          </a>
          
          

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className='footer up'>&copy; 2023 Samarth.dev. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
