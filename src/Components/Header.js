import React from "react";
import reactLogo from "../images/logo.svg"

function Header() {
  function handleChange (){
    document.body.classList.toggle("dark-theme");
  }

  return (
    <header>
      <nav className="nav">
        <img src={reactLogo} alt=" " className="img" />
        <ul className="nav-items">
          <li>React</li>
          <li>Fun</li>
          <li>Facts</li>
        </ul>
        <label class="switch">
          <input type="checkbox" onChange={handleChange}/>
          <span class="slider"></span>
        </label>
      </nav>
    </header>
  );
}

export default Header;
