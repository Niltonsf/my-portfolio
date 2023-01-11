import "./index.css";
import { isMobile } from "react-device-detect";

export default function ScrollUp() {
  return (
    <a
      href="#home"
      className="scrollup"
      style={isMobile ? { bottom: 80, right: 15 } : {}}
    >
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
}
