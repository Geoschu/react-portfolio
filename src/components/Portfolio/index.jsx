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
      description: "HTML/CSS/JavaScript",
      link: "https://geoschu.github.io/parkpal/",
      repo: "https://github.com/Geoschu/parkpal",
    },
    {
      name: "professionalReadmeGenerator",
      description: "JavaScript",
      link: "https://youtube.com",
      repo: "https://github.com/Geoschu/professional-readme-generator",
    },
    {
      name: "svgLogoMaker",
      description: "JavaScript",
      link: "https://youtube.com",
      repo: "https://github.com/Geoschu/svg-logo-maker",
    },
    {
      name: "noteTaker",
      description: "HTML/JavaScript/CSS",
      link: "https://geoschu.github.io/note-taker/",
      repo: "https://github.com/Geoschu/note-taker",
    },
    {
      name: "employeeTracker",
      description: "JavaScript",
      link: "https://youtube.com",
      repo: "https://github.com/Geoschu/employee-tracker",
    },
    {
      name: "ecommerceBackend",
      description: "JavaScript",
      link: "https://youtube.com",
      repo: "https://github.com/Geoschu/ecommerce-backend",
    },
    {
      name: "techBlog",
      description: "React/JavaScript/CSS",
      link: "https://github.com/Geoschu/tech-blog",
      repo: "https://github.com/Geoschu/tech-blog",
    },
    {
      name: "reelRoster",
      description: "Handlebars/HTML/JavaScript/Scheme/CSS",
      link: "https://geoschu.github.io/reelroster/",
      repo: "https://github.com/Geoschu/reelroster",
    },
    {
      name: "regexTutorial",
      description: "Markdown",
      link: "https://gist.github.com/Geoschu/44569615365930546e5aa1d31335e78e",
      repo: "https://gist.github.com/Geoschu/44569615365930546e5aa1d31335e78e",
    },
    {
      name: "sociaMediaApi",
      description: "JavaScript",
      link: "https://youtube.com/",
      repo: "https://github.com/Geoschu/social-media-api",
    },
    {
      name: "pwaTextEditor",
      description: "HTML/JavaScript/CSS",
      link: "https://pwa-text-editor-uct8.onrender.com/",
      repo: "https://github.com/Geoschu/pwa-text-editor",
    },
    {
      name: "reactPortfolio",
      description: "React/HTML/CSS/JavaScript",
      link: "https://onrender.com",
      repo: "https://github.com/Geoschu/react-portfolio",
    },
    {
      name: "bookSearchEngine",
      description: "HTML/JavaScript/CSS",
      link: "https://onrender.com",
      repo: "https://github.com/Geoschu/book-searchengine",
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
