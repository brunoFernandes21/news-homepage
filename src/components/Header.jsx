const Header = () => {
  return (
    <div className="header_container">
      <img src="/src/assets/logo.svg" alt="news logo" />
      <ul className="header__links">
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
