import { FaGithub, FaLinkedin, FaEnvelope, FaUserCircle  } from 'react-icons/fa';
import { FaCode } from "react-icons/fa6";
import CardIcons from './common/CardIcons';
import INFO from "../data/user";
import './styles/About.css';

const About = () => {
  return (
    <div className="homepage-first-area">
      <div className="homepage-first-area-left-side">
        <div 
        className="title homepage-title"
        data-aos="fade-right"
        >
          {INFO.homepage.title}
        </div>

        <div className="homepage-subtitle-name">
          <FaUserCircle  size={22} />
          {INFO.main.name}
        </div>
        <h2 className='homepage-section-about-title'>About Me</h2>
        <div className="subtitle homepage-subtitle-description">
          {INFO.homepage.description}
        </div>

        <div className="homepage-socials">
          <a
            href='mailto:zerbatofacundo@gmail.com'
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope size={22} className="homepage-social-icon" />
          </a>
          <a
            href={INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} className="homepage-social-icon" />
          </a>
          <a
            href={INFO.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} className="homepage-social-icon" />
          </a>
        </div>
      </div>

      <div className="homepage-first-area-right-side">
        <h3 className="about-subtitle"><FaCode size={26} />My Technology Stack</h3>
        <div className="homepage-image-container">
          <div className="homepage-image-wrapper">
            {
              INFO.icons.map((item, index) => (
                <CardIcons item={item} key={index} />
              )
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;