import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
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
            href='www.google.com'>
            <FaLinkedin size={25} />
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            role="link"
            className="contact-link"
            href='www.google.com'>
            <FaGithub size={25} />
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            role="link"
            className="contact-link"
            href='www.google.com'>
            <FaEnvelope size={25} />
            Email
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            role="link"
            className="contact-link-cv"
            href='www.google.com'>
            Download CV
            <FaDownload size={20} />
          </a>
        </div>

      </div>
    </footer>


  )
};

export default Contact;