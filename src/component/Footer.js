import React from "react";


function Footer() {
 

  // Footer Contents

  return (

    <footer
      className="page-footer"
    >
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-fb mx-1"
              href="https://github.com/Titoxox97"
            >
              <i
                className="fa fa-github"
                style={{
                  color: "black",
                  fontSize: "24px",
                  justifyContent: "center",
                }}
              ></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/matias-ahrensdorf-5353b4152"
            >
              <i className="fa fa-linkedin" style={{ color: "black" }}>
                {" "}
              </i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center">
        © 2022 Copyright:
        <a
          style={{ color: "black" }}
        >
          {" "}
          Matias Ahrensdorf
        </a>
      </div>
    </footer>
  );
}

export default Footer;
