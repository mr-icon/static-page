import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="../images/react.png" alt=" " className="img" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
