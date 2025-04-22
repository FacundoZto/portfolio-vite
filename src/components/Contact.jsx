import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './styles/Contact.css';

const Contact = () => {
  return (
    <>
      <h2>Connect</h2>
      <div className="contact">

          <div className="contact-container">
            <div className="contact-logo">
              <img alt="logo" />
            </div>
            <div className="contact-title">
            <FaEnvelope size={24} />
            </div>
            <div className="contact-description">
            <FaEnvelope size={24} className="homepage-social-icon" />
            </div>
            <div className="contact-link">
              <div className="contact-link-icon">
                Icono contact
              </div>

              <div className="contact-link-text">Icono contact</div>
            </div>
          </div>
 
      </div>
    </>
  )
};

export default Contact;