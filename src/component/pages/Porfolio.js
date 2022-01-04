import React from "react";
import Project from "../Project";

const projectsCard = [
  // Project list
];

function Portfolio() {
  return (
    <div>
      {projectsCard.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default Portfolio;
