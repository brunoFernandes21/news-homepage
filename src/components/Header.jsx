import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header_container">
      <img src="/src/assets/logo.svg" alt="news logo" />
      <GiHamburgerMenu className="cursor-pointer text-4xl"/>
      <ul className="header__links-desktop">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
};

export default Header;
