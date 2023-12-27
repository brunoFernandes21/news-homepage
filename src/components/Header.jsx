import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
const Header = ( { showNav, setShowNav }) => {

  return (
    <nav className={`header_container ${showNav ? "show__nav" : ""}`}>
      <img src="/logo.svg" alt="news logo" />
      <button className="hover:bg-slate-900 rounded p-1">
      <GiHamburgerMenu
        onClick={() => setShowNav(true)}
        className="mobile__icon cursor-pointer text-4xl hover:text-white"
      />
      </button>
      <DesktopNavigation/>
      <MobileNavigation setShowNav={setShowNav}/>
    </nav>
  )
}

export default Header