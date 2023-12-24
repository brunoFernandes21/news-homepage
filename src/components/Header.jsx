import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavigation from "./MobileNavigation";
const Header = ( { showNav, setShowNav }) => {

  return (
    <nav className={` header_container ${showNav ? "show__nav" : ""}`}>
      <img src="/src/assets/logo.svg" alt="news logo" />
      <GiHamburgerMenu
        onClick={() => setShowNav(true)}
        className="mobile__icon cursor-pointer text-4xl"
      />
      <MobileNavigation setShowNav={setShowNav}/>

    </nav>
  )
}

export default Header