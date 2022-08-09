import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
      <AnimatedCursor 
      color="255,255,255"
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={0}//1.7
      outerAlpha={0}
      outerStyle={{
        border: '3px solid #fff'
      }}
      />
    </div>
  );
}

export default App;
