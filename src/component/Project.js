import React from "react";

function Project(props) {
  const {
    deployedLink,
    imageIcon,
    descriptionImage,
    projectName,
    projectDescription,
    githubLink,
  } = props.project;
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
    height: "70%",
    width: "70%",
    marginTop: "70px",
    marginLeft: "20px",
    marginBottom: "70px",
  };

  return (
    <div className="col">
      <div className="card h-100" style={containerStyle}>
        <a href={deployedLink}>
          <img
            src={}
            className=""
            alt={}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title"> {projectName}</h5>
          <p className="card-text"> {projectDescription}</p>
          <a href={githubLink} className="btn btn-primary">
            View Github Project
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
