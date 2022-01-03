import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Portfolio from "./component/pages/Porfolio";
import Resume from "./component/pages/Resume";

function App() {
  document.body.style.backgroundColor = "red";
  const arr = ["hola", "buenas tardes", "como le va", "hasta luego"];

  return (
    <div id="app">
      <Router>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/resume" component={Resume}></Route>
            <Route component={About}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </Router>
    </div>
  );
}

export default App;
