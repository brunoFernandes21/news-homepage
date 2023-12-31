import Background from "./components/Background";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import NewSection from "./components/NewSection";
import PopularSection from "./components/PopularSection";
import Header from "./components/Header";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="app">
      <Background showNav={showNav} />
      <Header showNav={showNav} setShowNav={setShowNav} />
      <div className="main__content">
        <HeroSection />
        <NewSection />
      </div>
        <PopularSection />
    </div>
  );
};

export default App;
