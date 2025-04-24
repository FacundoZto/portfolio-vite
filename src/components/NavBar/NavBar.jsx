import { useState } from "react";
import NavWeb from "./NavWeb";
import NavMobile from "./NavMobile";

const NavBar = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <>
      <NavWeb />
      <NavMobile menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
    </>
  )
};

export default NavBar;