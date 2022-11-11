import React from "react";
import reactLogo from "../images/logo.svg"

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={reactLogo} alt=" " className="img" />
        <ul className="nav-items">
          <li>React</li>
          <li>Fun</li>
          <li>Facts</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
