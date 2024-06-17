import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // links to projects and repos
  const [projects] = useState([
    {
      name: "Semantic Refactor",
      description: "HTML/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Password Generator",
      description: "HTML/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Code Quiz",
      description: "HTML/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Day Scheduler",
      description: "HTML/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Weather Dashboard",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "ParkPal",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Professional ReadMe Generator",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "SVG Logo Maker",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Note Taker",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Employee Tracker",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "E-Commerce Backend",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Tech Blog",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "ReelRoster",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Regex Tutorial",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Social Media API",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Progressive Web App Text Editor",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "React Portfolio",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "Book Search Engine",
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
