import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CardIcons from './common/cardIcons';
import INFO from "../data/user";
import './styles/About.css';

const About = () => {
  return (
    <div className="homepage-first-area">
      <div className="homepage-first-area-left-side">
        <div className="title homepage-title">
          {INFO.homepage.title}
        </div>

        <div className="homepage-subtitle-name">
          {INFO.main.name}
        </div>

        <div className="subtitle homepage-subtitle">
          {INFO.homepage.description}
        </div>

        <div className="homepage-socials">
          <a
            href={INFO.socials.email}
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope size={24} className="homepage-social-icon" />
          </a>
          <a
            href={INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} className="homepage-social-icon" />
          </a>
          <a
            href={INFO.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} className="homepage-social-icon" />
          </a>
        </div>
      </div>

      <div className="homepage-first-area-right-side">
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