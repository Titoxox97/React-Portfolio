import React from "react";
import headShot from "../../assets/headShot.jpeg";

// Page Layout

function About() {
  const aboutPage = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#d8e1ff",
  };
  const imageStyle = {
    height: "250px",
    width: "250px",
    borderRadius: "5px",
    padding: "20px",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const Tstyle = {
    display: "flex",
    textAlign: "center",
    fontSize: "20px",
    padding: "90px",
  };
  const h1 = {
    fontSize: "50px",
    marginTop: "20px",
  };

  // Page Contents

  return (
    <section style={aboutPage}>
      <h1 style={h1}>About Me</h1>
      <div className="container-content">
        <div className="profile-picture" style={imageStyle}>
          <img src={headShot} alt="profile" />
        </div>
        <p style={Tstyle}>
          <br />
          My name is Matias Ahrensdorf and I am a young professional seeking to
          build upon my web development skills. I want to use my current skill
          set, to make an impact in the finance industry.
          <br />
        </p>
      </div>
    </section>
  );
}

export default About;
