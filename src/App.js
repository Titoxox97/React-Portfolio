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
          <Route exact path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
