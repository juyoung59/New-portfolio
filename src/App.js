import Navbar from "./components/navbar/Navbar";
import Introduce from "./components/introduce/Introduce";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduce />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
