import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // links to projects and repos
  const [projects] = useState([
    {
      name: "semanticRefactor",
      description: "HTML/CSS",
      link: "https://github.com/Geoschu/semantic-refactor",
      repo: "https://github.com/Geoschu/semantic-refactor",
    },
    {
      name: "passwordGenerator",
      description: "HTML/CSS/JavaScript",
      link: "https://geoschu.github.io/password-generator/",
      repo: "https://github.com/Geoschu/password-generator",
    },
    {
      name: "codeQuiz",
      description: "HTML/CSS/JavaScript",
      link: "https://geoschu.github.io/code-quiz/",
      repo: "https://github.com/Geoschu/code-quiz",
    },
    {
      name: "dayScheduler",
      description: "HTML/CSS/JavaScript",
      link: "http://youtube.com",
      repo: "https://github.com/Geoschu/day-scheduler",
    },
    {
      name: "weatherDashboard",
      description: "HTML/CSS/JavaScript",
      link: "https://geoschu.github.io/weather-dashboard/",
      repo: "https://github.com/Geoschu/weather-dashboard",
    },
    {
      name: "parkPal",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "professionalReadmeGenerator",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "svgLogoMaker",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "noteTaker",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "employeeTracker",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "ecommerceBackend",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "techBlog",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "reelRoster",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "regexTutorial",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "sociaMediaApi",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "pwaTextEditor",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "reactPortfolio",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "bookSearchEngine",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
