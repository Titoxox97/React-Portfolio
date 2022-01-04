import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Nav";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Portfolio from "./component/pages/Porfolio";
import Resume from "./component/pages/Resume";
function App() {
  document.body.style.backgroundColor = "#7FFFD4";
  const arr = ["hola", "buenas tardes", "como le va", "hasta luego"];

  return (
    <div id="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/resume" component={Resume}></Route>
          <Route component={About}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
