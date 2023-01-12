import "./index.css";
import { HeaderCP, Nav, NavMenu, Ul, CloseIcon } from "./styles";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const mediumDevices = useMediaQuery("(max-width: 768px)");
  const smallDevices = useMediaQuery("(max-width: 350px)");

  return (
    <HeaderCP mediumDevices={mediumDevices}>
      <Nav>
        <span className="nav_logo">Nilton A Schumacher F</span>

        <NavMenu
          smallDevices={smallDevices}
          mediumDevices={mediumDevices}
          toggleMenu={toggleMenu}
        >
          <Ul smallDevices={smallDevices} mediumDevices={mediumDevices}>
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i
                  className="uil uil-estate nav_icon"
                  style={
                    mediumDevices
                      ? { display: "block", fontSize: `1.2rem` }
                      : { display: "none" }
                  }
                ></i>
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i
                  className="uil uil-user nav_icon"
                  style={
                    mediumDevices
                      ? { display: "block", fontSize: `1.2rem` }
                      : { display: "none" }
                  }
                ></i>
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i
                  className="uil uil-file-alt nav_icon"
                  style={
                    mediumDevices
                      ? { display: "block", fontSize: `1.2rem` }
                      : { display: "none" }
                  }
                ></i>
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#qualification" className="nav_link">
                <i
                  className="uil uil-briefcase-alt nav_icon"
                  style={
                    mediumDevices
                      ? { display: "block", fontSize: `1.2rem` }
                      : { display: "none" }
                  }
                ></i>
                Qualification
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                <i
                  className="uil uil-scenery nav_icon"
                  style={
                    mediumDevices
                      ? { display: "block", fontSize: `1.2rem` }
                      : { display: "none" }
                  }
                ></i>
                Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i
                  className="uil uil-message nav_icon"
                  style={
                    mediumDevices
                      ? { display: "block", fontSize: `1.2rem` }
                      : { display: "none" }
                  }
                ></i>
                Contact
              </a>
            </li>
          </Ul>

          <CloseIcon
            mediumDevices={mediumDevices}
            onClick={() => setToggleMenu(false)}
          />
        </NavMenu>

        <div
          className="nav_toggle"
          style={
            mediumDevices
              ? { display: "block", fontSize: `1.2rem`, cursor: `pointer` }
              : { display: "none" }
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </Nav>
    </HeaderCP>
  );
}
