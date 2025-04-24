import './styles/NavWeb.css';

const NavWeb = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-background">

          <ul className='nav-list'>
            <li className="nav-item">
              <a href="#about" data-aos="zoom-in">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" data-aos="zoom-in">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" data-aos="zoom-in">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavWeb;