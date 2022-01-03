import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 fs-2 fw-bold p-2">
          Matias Ahrensdorf
        </span>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link
              className="nav-link active text-dark h5"
              aria-current="page"
              to="/"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark h5" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark h5" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark h5" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
