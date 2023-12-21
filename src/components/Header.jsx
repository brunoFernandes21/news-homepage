import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [showNav, setShowNav] = useState(false)

  return (
    <nav className={`header_container ${showNav ? "show__nav" : ""}`}>
      <img src="/src/assets/logo.svg" alt="news logo" />
      <GiHamburgerMenu onClick={() => setShowNav(true)} className="mobile__icon cursor-pointer text-4xl"/>
      <AiOutlineClose onClick={() => setShowNav(false)} className="close__nav cursor-pointer text-4xl"/>

      <ul className="header__links__desktop">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
};

export default Header;
