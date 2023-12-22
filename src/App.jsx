import Background from "./components/Background";
import Header from "./components/Header";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import NewSection from "./components/NewSection";
import PopularSection from "./components/PopularSection";

const App = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="app">
      <Background showNav={showNav}/>
      <Header showNav={showNav} setShowNav={setShowNav}/>
      <HeroSection/>
      <NewSection/>
      <PopularSection/>
    </div>
  )
};

export default App;
