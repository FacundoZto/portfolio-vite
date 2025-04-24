import './styles/NavWeb.css';

const NavWeb = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-background">

          <ul className='nav-list'>
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavWeb;