import { AiOutlineClose } from "react-icons/ai";

const MobileNavigation = ({ setShowNav }) => {
  return (
    <ul className="header__links__mobile">
      <AiOutlineClose
        onClick={() => setShowNav(false)}
        className="close__nav cursor-pointer text-4xl hover:text-slate-900"
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
