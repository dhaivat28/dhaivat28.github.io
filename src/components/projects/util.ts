import aspironImg from "../../assets/portfolio/aspiron_web_solutions.png";
import BestPrixImg from "../../assets/portfolio/bestprix.png";
import budgetTracker from "../../assets/portfolio/budget_tracker.png";
import caleaImg from "../../assets/portfolio/calea.png";
import forkifyImg from "../../assets/portfolio/forkify.png";
import natoursImg from "../../assets/portfolio/natours.png";

export interface ProjectItem {
  id: number;
  title: string;
  isNew?: boolean;
  image: string;
  description: string;
  previewUrl?: string;
  githubLink?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 0,
    title: "Simply Fi",
    image: budgetTracker,
    isNew: true,
    description:
      "Back in 2019, my partner and I managed finances with spreadsheets, but they were limiting. I tried Notion for better visuals and structure, but it lacked analytics and dynamic features. It improved our setup slightly, but still wasn’t a complete or convenient budgeting solution.",
  },
  {
    id: 1,
    title: "Natours",
    image: natoursImg,
    description:
      "I created this project as part of the <b>Advanced CSS and Sass </b> course by Jonas Schmedtmann. It follows the BEM methodology and the 7-1 Sass architecture pattern, and is fully responsive across a range of devices.",
    previewUrl: "https://natours-scss-project.netlify.app/",
    githubLink: "https://github.com/dhaivat28/natours",
  },
  {
    id: 2,
    title: "Forkify",
    image: forkifyImg,
    description:
      "I built the <b>Forkify</b> project as part of the <b>The Complete JavaScript Course (2019)</b> course by Jonas Schmedtmann. It was developed using <b>Webpack</b>, <b>Babel</b>, <b>JavaScript (ES6)</b>, and the <b>Food2Fork API</b>. The app allows users to search, view, and shortlist thousands of recipes. It also lets users save their favorite recipes and update serving sizes.",
    previewUrl: "https://forkify-food2fork.netlify.app/",
    githubLink: "https://github.com/dhaivat28/forkify",
  },
  // {
  //   id: 4,
  //   title: "Budgetify",
  //   image: BudgetifyImg,
  //   description:
  //     "A <b>JavaScript</b> application to track income and expenses. I built this project as part of the <b>Complete JavaScript Course (2019)</b> by Jonas Schmedtmann. Through this project, I learned about <b>JavaScript ES6/ES2015</b>, <b>DOM manipulation</b>, <b>asynchronous JavaScript</b>, <b>Promises</b>, and <b>AJAX</b>",
  //   previewUrl: "https://budgetify-project.netlify.app/",
  //   githubLink: "https://github.com/dhaivat28/budgetify",
  // },
  {
    id: 5,
    title: "Aspiron Web Solutions",
    image: aspironImg,
    description:
      "This website was developed in 2019 for my own web design business, which I ran for several years and grew to serve over 25 clients. It was built using <b>HTML</b>, <b>CSS</b>, <b>jQuery</b>, and <b>Bootstrap</b>. The site is fully responsive, providing a seamless experience across all devices and screen sizes.",
    previewUrl: "https://aspiron-web-solutions.netlify.app/",
    githubLink: "https://github.com/dhaivat28/Aspiron-Web-Solutions",
  },
  {
    id: 6,
    title: "Calea",
    image: caleaImg,
    description:
      "CALEA is a one-page e-commerce watch store I developed as part of a 30-hour design challenge. Built with <b>HTML</b>, <b>CSS</b>, <b>Flexbox</b>, <b>Vanilla JavaScript</b>, and <b>Sass</b>, the site features a fully responsive design that adapts seamlessly across a wide range of devices",
    previewUrl: "calea-sass.netlify.app",
    githubLink: "https://github.com/dhaivat28/dna-fed-coding-challenge",
  },
  {
    id: 3,
    title: "BestPrix",
    image: BestPrixImg,
    description:
      "An <b>e-commerce</b> project that allowed users to compare prices across various e-commerce platforms and monitor them with <b>smart alerts</b>. <b>Bestprix</b>'s database was curated by scraping multiple e-commerce websites using a custom <b>spider built with Scrapy</b>, a Python library.",
    previewUrl: "https://bestpix.netlify.app/",
    githubLink: "https://github.com/dhaivat28/bestprix",
  },
];
