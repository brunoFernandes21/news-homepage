
const DesktopNavigation = () => {
  return (
    <ul className="desktop__navigation__links gap-10 font-semibold text-lg text-gray-500">
        <li className="desktop__nav__links transition ease-in-out hover:underline cursor-pointer">Home</li>
        <li className="desktop__nav__links transition ease-in-out hover:underline cursor-pointer">New</li>
        <li className="desktop__nav__links transition ease-in-out hover:underline cursor-pointer">Popular</li>
        <li className="desktop__nav__links transition ease-in-out hover:underline cursor-pointer">Trending</li>
        <li className="desktop__nav__links transition ease-in-out hover:underline cursor-pointer">Categories</li>
    </ul>
  )
}

export default DesktopNavigation