import About from "./pages/About";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Qualification from "./pages/Qualification";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ScrollUp from "./pages/ScrollUp";
import { useMediaQuery } from "usehooks-ts";

export default function MainWebpage() {
  const matches = useMediaQuery("(max-width: 776px)");

  return (
    <div
      style={{
        background: matches ? "red" : "white",
        overflowY: "scroll",
        maxHeight: "100%",
        scrollBehavior: "smooth",
      }}
      className="hide"
    >
      <Header />

      <div>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <ScrollUp />
    </div>
  );
}
