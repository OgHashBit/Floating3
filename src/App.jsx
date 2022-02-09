import React, { useEffect, useState } from "react";

// Components
import Nav from "Nav/Nav";
import Home from "Home/Home";
import Contact from "/Contact/Contact";
// Animation
import Aos from "aos";
import "aos/dist/aos.css";
import { Menu } from "Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Contact 
/>
    </div>
  );
}

export default App;
