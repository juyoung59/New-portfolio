import Navbar from "./components/navbar/Navbar";
import Introduce from "./components/introduce/Introduce";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduce />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
