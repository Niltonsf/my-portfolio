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
import { useCallback, useEffect } from "react";
import { handleContainerStyle } from "../mediaQuery/mediaQueryHandles";

export default function MainWebpage() {
  const largeDevices = useMediaQuery("(max-width: 992px)");
  const mediumDevices = useMediaQuery("(max-width: 768px)");

  const handleMediaQuery = useCallback(() => {
    handleContainerStyle(largeDevices, mediumDevices);
  }, [largeDevices, mediumDevices]);

  useEffect(() => {
    handleMediaQuery();
  }, [handleMediaQuery]);

  return (
    <div
      style={{
        overflowY: "scroll",
        overflowX: "hidden",
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
