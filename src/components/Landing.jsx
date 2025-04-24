import NavBar from './NavBar/NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './styles/Landing.css';

const Landing = () => {
  return (
    <div className="page-content" id='about'>
      <NavBar />
      <div className="content-wrapper">

        <div className="homepage-container">
          <About />

          <div className="homepage-projects" id='projects'>
            <Projects />
          </div>

          <div className="homepage-contact" id='contact'>
            <Contact />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Landing;