import "./index.css";
import { HeaderCP, Nav, NavMenu, Ul, CloseIcon } from "./styles";
import { useMediaQuery } from "usehooks-ts";

export default function Header() {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <HeaderCP>
      <Nav>
        <span className="nav_logo">Nilton A Schumacher F</span>

        <NavMenu matches={matches}>
          <Ul matches={matches}>
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i
                  className="uil uil-estate nav_icon"
                  style={
                    matches ? { display: "block", fontSize: `1.2rem` } : {}
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
                    matches ? { display: "block", fontSize: `1.2rem` } : {}
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
                    matches ? { display: "block", fontSize: `1.2rem` } : {}
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
                    matches ? { display: "block", fontSize: `1.2rem` } : {}
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
                    matches ? { display: "block", fontSize: `1.2rem` } : {}
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
                    matches ? { display: "block", fontSize: `1.2rem` } : {}
                  }
                ></i>
                Contact
              </a>
            </li>
          </Ul>

          <CloseIcon matches={matches} />
        </NavMenu>
      </Nav>
    </HeaderCP>
  );
}
