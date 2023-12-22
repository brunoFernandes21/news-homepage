import Background from "./components/Background";
import Header from "./components/Header";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import NewSection from "./components/NewSection";

const App = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="app">
      <Background showNav={showNav}/>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      <HeroSection/>
      <NewSection/>
    </div>
  )
};

export default App;
