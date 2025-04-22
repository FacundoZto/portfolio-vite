import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import './styles/Landing.css';

const Landing = () => {
  return (
    <div className="page-content">
      <NavBar active="home" />
      <div className="content-wrapper">

        <div className="homepage-container">
          <About />

          <div className="homepage-projects">
            <Projects />
          </div>

          <div className="homepage-contact">
            <Contact />
          </div>

          {/* <div className="homepage-after-title">
            <div className="homepage-works">
              <Works />
            </div>
          </div> */}

          <div className="page-footer">
            <Footer />
          </div>

        </div>
      </div>
    </div>
  )
};

export default Landing;