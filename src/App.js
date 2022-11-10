import React from "react";
import "./style.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
