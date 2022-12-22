import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <nav className="nav container">
        <span className="nav_logo">Nilton A Schumacher F</span>

        <div className="nav_menu">
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon"></i>
                Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i>
                About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i>
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#qualification" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i>
                Qualification
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close"></i>
        </div>
      </nav>
    </div>
  );
}
