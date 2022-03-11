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
    padding: "150px",
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
          My name is Matias Ahrensdorf and I am a young professional seeking work in the finance industry. I want to use my web development skills along 
          with my background in finance to help companies innovate their financial technologies as the world continues to push towards digital banking.
          I believe that the finance industry will continue to make this shift and continue to adapt to new technologies that are appearing in the market
          on a daily basis. I would like nothing more than to be a part of this journey.
          <br />
        </p>
      </div>
    </section>
  );
}

export default About;
