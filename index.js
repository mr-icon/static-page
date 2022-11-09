function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="images/react-logo.jpg" className="img" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    </header>
  );
}



function Content() {
  return (
    <div className>
      <h1>Fun Fact About React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including, mobile apps</li>
      </ul>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <small>o 2022 emmanuel development. All rights reserved.</small>
    </footer>
  );
}
function Component() {
  return (
    <div>
      <Header /> 
      <Content />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Component />, document.getElementById("root"));
