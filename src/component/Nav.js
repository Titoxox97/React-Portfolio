// import { directive } from "@babel/types";
// import { reverse } from "dns";
import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  const flexNav = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid" style={flexNav}>
        <h2 className="navbar-brand mb-0 h1 fs-2 fw-bold p-2" style={flexNav}>
          Matias Ahrensdorf
        </h2>

        {/* <ul className="nav justify-content-end"> */}
        <div className="nav-item">
          <Link
            className="nav-link active text-dark h5"
            style={flexNav}
            aria-current="page"
            to="/"
          >
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className="nav-link text-dark h5"
            to="/portfolio"
            style={flexNav}
          >
            Portfolio
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link text-dark h5" to="/contact" style={flexNav}>
            Contact
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link text-dark h5" to="/resume" style={flexNav}>
            Resume
          </Link>
        </div>
        {/* </ul> */}
      </div>
    </nav>
  );
}
