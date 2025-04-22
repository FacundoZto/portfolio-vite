import './styles/Footer.css';

const Footer = () => {
  return (
    <>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<a href="/">Home</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="/about">About</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="/projects">Projects</a>
						</li>
						<li className="footer-nav-link-item">
							<a href="/contact">Contact</a>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 fz.dev. All Rights Reserved.
					</div>
				</div>
			</div>
		</>
  )
};

export default Footer;