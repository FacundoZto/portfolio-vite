import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import CV from '../assets/Facundo.Zerbato.pdf';
import './styles/Contact.css';

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="contact-content">
        <div className="contact-cards">
          <a
            target="_blank"
            rel="noreferrer"
            role="link"
            className="contact-link"
            href='https://www.linkedin.com/in/facundozerbato/'>
            <FaLinkedin size={25} />
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            role="link"
            className="contact-link"
            href='https://github.com/FacundoZto'>
            <FaGithub size={25} />
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            href='mailto:zerbatofacundo@gmail.com'>
            <FaEnvelope size={25} />
            Email
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            role="document"
            className="contact-link-cv"
            href={CV}
            download="FacundoZerbato"
            >
            Download CV
            <FaDownload size={18} />
          </a>
        </div>

      </div>
    </footer>


  )
};

export default Contact;