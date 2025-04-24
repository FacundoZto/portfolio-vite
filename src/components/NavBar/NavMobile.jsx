import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import './styles/NavMobile.css';

const NavMobile = (props) => {
  const { menuMobile, setMenuMobile } = props;
  
  const handleMenu = () => {
    setMenuMobile(!menuMobile);
  }

  return (
    <div className="nav-mobile-container">
      <div className="mobile-header">
        <button className="menu-icon" onClick={handleMenu}>
          {menuMobile ? <CiMenuFries size={30} /> : <CiMenuBurger size={30} />}
        </button>
      </div>

      <nav className={`mobile-nav ${menuMobile ? "open" : ""}`}>
        <ul>
          <li><a href="#about" onClick={handleMenu}>About</a></li>
          <li><a href="#projects" onClick={handleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={handleMenu}>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMobile;