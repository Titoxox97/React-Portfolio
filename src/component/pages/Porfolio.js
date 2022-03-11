import React from "react";
import Project from "../Project";

const projectsCard = [
  // Project list

  {
    deployedLink: "https://save-yo-money.herokuapp.com/",
    imageIcon: "SS-BudgTrack.png",
    descriptionImage: "Budget Tracker",
    projectName: "SaveYoMoney",
    projectDescription:
      "Application that allows people to track their spending and earnings.",
    githubLink: "https://github.com/Titoxox97/SaveYoMoney-19",
    backgroundColor: "#e7eaf6",
    id: 1,
  },
  {
    deployedLink: "https://note-taker1997.herokuapp.com",
    imageIcon: "SS-NoteTake.png",
    descriptionImage: "Note Taker Application",
    projectName: "Note-Taker",
    projectDescription:
      "Application that allows users to make notes for themselves",
    githubLink: "https://github.com/Titoxox97/Note-taker",
    backgroundColor: "a2a8d3",
    id: 2,
  },
  {
    deployedLink: "https://titoxox97.github.io/Challenge5-WorkdayPlanner/",
    imageIcon: "SS-WorkSched.png",
    descriptionImage: "Work Day Scheduler",
    projectName: "Work Day Planner",
    projectDescription:
      "An application allowing the user to view their schedule for the day and uses color coding to determine what time of day it is.",
    githubLink: "https://github.com/Titoxox97/Challenge5-WorkdayPlanner",
    backgroundColor: "#38598b",
    id: 3,
  },
  {
    deployedLink: " https://titoxox97.github.io/Challenge-3-HW/",
    imageIcon: "SS-PwGen.png",
    descriptionImage: "PassWord Generator",
    projectName: "Password Generator",
    projectDescription:
      "An application that creates a random password based on certain customizable criteria",
    githubLink: "https://github.com/Titoxox97/Challenge-3-HW",
    backgroundColor: "#113f67",
    id: 4,
  },
  {
    deployedLink: "https://fathomless-harbor-03715.herokuapp.com/",
    imageIcon: "SS-BookEng.png",
    descriptionImage: "Book Search Engine",
    projectName: "Book Search Engine",
    projectDescription:
      "An application that allows you to search for books based on key words",
    githubLink: "https://github.com/Titoxox97/21-BookSearch-Engine",
    backgroundColor: "#005689",
    id: 5,
  },
  {
    deployedLink: " https://titoxox97.github.io/CodeQuiz-CH-4/",
    imageIcon: "SS-CodeQuiz.png",
    descriptionImage: "Quiz web page",
    projectName: "Code Quiz",
    projectDescription:
      "Web application allowing user to take a quiz testing them on their knowledge of web development",
    githubLink: "https://github.com/Titoxox97/CodeQuiz-CH-4",
    backgroundColor: "#005689",
    id: 6,
  },

  {
    deployedLink: "https://secret-journey-36348.herokuapp.com/",
    imageIcon: "SS-DateApp.png",
    descriptionImage: "Dating App Home",
    projectName: "Cupids BlindFold",
    projectDescription:
      "Dating app that is based largely around personality rather than looks. Users profile photos are not revealed until five messages have been exchnaged between users",
    githubLink: "https://github.com/Shagens/BLIND-DATE",
    backgroundColor: "#005689",
    id: 7,
  },
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
