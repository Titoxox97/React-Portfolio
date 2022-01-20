import React from "react";

export default function Resume() {
  const h1 = {
    fontSize: "50px",
    padding: "15px 15px 15px 15px",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignText: "center",
    backgroundColor: "#d8e1ff",
  };

  return (
    <div style={divStyle}>
      <div>
        <h1 style={h1}>Resume</h1>
        <p>
          Download my{" "}
          <a href={require("../../assets/Resume-FDP.pdf")}>Resume</a>
        </p>

        <h2>Front-End Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h2>Back-End Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MVC</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
}
