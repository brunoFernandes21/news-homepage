import Background from "./components/Background";
import Header from "./components/Header";
import { useState } from "react";
import HeroSection from "./components/HeroSection";

const App = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="app">
      <Background showNav={showNav}/>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      <HeroSection/>
    </div>
  )
};

export default App;
