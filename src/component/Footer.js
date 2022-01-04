import React from "react";

function Footer() {
  return (
    <footer
      class="page-footer fixed-bottom font-small"
      style={{ backgroundColor: "#CD5C5C" }}
    >
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-1"
              href="https://github.com/Titoxox97"
            >
              <i class="fab fa-github" style={{ color: "black" }}>
                {" "}
              </i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              class="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/matias-ahrensdorf-5353b4152"
            >
              <i class="fab fa-linkedin-in" style={{ color: "black" }}>
                {" "}
              </i>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-copyright text-center">
        © 2021 Copyright:
        <a href="" style={{ color: "black" }}>
          {" "}
          Matias Ahrensdorf
        </a>
      </div>
    </footer>
  );
}

export default Footer;
