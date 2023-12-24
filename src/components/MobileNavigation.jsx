import { AiOutlineClose } from "react-icons/ai";

const MobileNavigation = ({ setShowNav }) => {
  return (
    <ul className="header__links__desktop">
      <AiOutlineClose
        onClick={() => setShowNav(false)}
        className="close__nav cursor-pointer text-4xl"
      />
      <li>Home</li>
      <li>New</li>
      <li>Popular</li>
      <li>Trending</li>
      <li>Categories</li>
    </ul>
  );
};

export default MobileNavigation;
