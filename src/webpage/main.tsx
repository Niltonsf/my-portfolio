import "./main.css";
import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Qualification from "./pages/Qualification";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function MainWebpage() {
  return (
    // className="max_height"
    <div>
      <Header />

      <div className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
