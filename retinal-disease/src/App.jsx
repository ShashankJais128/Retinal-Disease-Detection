import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import ML from "./components/ML/ML";
import Navbar from "./components/Navbar/Navbar";
import TechnologyUsed from "./components/TechnologyUsed/TechnologyUsed";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Home />
      <About />
      <TechnologyUsed />
      <ML />
      <Contact />
    </div>
  );
}

export default App;
