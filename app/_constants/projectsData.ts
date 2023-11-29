type projectDataType = {
  image: string;
  link: string;
  github: string;
  category: string;
  name: string;
  techUsed: string[];
  description: string;
};
export const projectData: projectDataType[] = [
  {
    image: "/projectImages/portfolio-next-p-img.png",
    category: "next js",
    name: "Portfolio application",
    techUsed: [
      "next.js",
      "tailwindcss",
      "react icons",
      "shadcn library",
      "react-hook-form",
    ],
    description:
      "Designed and developed a professional portfolio website which can showcase my skills,projects,and achievements.Implemented an intuitive user interface with smooth transitions to create an engaging experience for visitors.Users can contact me through the contact section and I can receive their messages to my Email.",
    link: "https://swiggy-clone-sai-surya-teja.vercel.app/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/sst-portfolio-next",
  },
  {
    image: "/projectImages/swiggy-p-img.jpg",
    category: "react js",
    name: "Swiggy Clone",
    techUsed: [
      "react.js",
      "tailwind css",
      "react-router-dom-v6",
      "redux-toolkit",
      "materialUI",
      "react-hook-form",
      "fetch API",
      "lazy loading",
      "react-testing-library and Jest",
    ],
    description:
      "Developed a Swiggy clone and integrated with swiggy Real world API, which is providing users with a seamless online food ordering experience. Implemented features such as browsing restaurants,browsing menus items of each restaurants,adding and removing items to cart and calculate prices dynamically,contact form to connect with users, Lazy loading and placing orders with toast notifications.",
    link: "https://swiggy-clone-sai-surya-teja.vercel.app/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/swiggy-clone",
  },
  {
    image: "/projectImages/netflix-clone-p-img.png",
    category: "react js",
    name: "Netflix Clone",
    techUsed: [
      "react.js",
      "tailwindcss",
      "react query",
      "movieDB API",
      "react-router-dom-v6",
    ],
    description:
      "Developed a netflix clone and integrated with MovieDB API, which is providing users with a seamless experience. Implemented features such as browsing movies and view details about specific movie.",
    link: "https://netflix-gpt-sst.vercel.app/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/netflix-gpt",
  },
  {
    image: "/projectImages/youtube-p-img.jpg",
    category: "react js",
    name: "Youtube clone",
    techUsed: [
      "react.js",
      "tailwind css",
      "react-router-dom-v6",
      "redux-toolkit",
      "fetch API",
      "react player",
      "debouncing",
      "API polling",
    ],
    description:
      "Built a YouTube clone and integrated it with the YouTube API.Users can search for videos,watch them in React Player,and interact with features like live streaming and live commenting.Implemented Search with Debouncing,Implemented Live Comments using API polling.",
    link: "https://youtube-clone-sai-surya-teja.vercel.app/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/youtube-clone",
  },
  {
    image: "/projectImages/portfolio-p-img.png",
    category: "react js",
    name: "Portfolio App",
    techUsed: [
      "react.js",
      "react-router-dom",
      "scss",
      "materialUI",
      "EmailJS Library",
    ],
    description:
      "Designed and developed a professional portfolio website which can showcase my skills,projects,and achievements.Implemented an intuitive user interface with smooth transitions to create an engaging experience for visitors.Users can contact me through the contact section and I can receive their messages to my Email.",
    link: "https://portfolio-app-sai-surya-teja.vercel.app/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/portfolio-app",
  },
  {
    image: "/projectImages/quiz-p-img.png",
    category: "react js",
    name: "Quiz app",
    techUsed: [
      "react.js",
      "react-router-dom",
      "html5",
      "css3",
      "MUI icons",
      "browser API's",
    ],
    description:
      "Built a dynamic quizzes website which enables users to participate in multiple quizzes on various topics.Implemented features like timed quizzes,score tracking,and interactive feedback to engage users and enhance their learning experience",
    link: "https://quiz-app-sai-surya-teja.vercel.app/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/quiz-app",
  },

  {
    image: "/projectImages/expense-tracker-p-img.png",
    category: "react js",
    name: "Expense Tracker",
    techUsed: ["react.js", "context API", "html5", "css3", "CRUD"],
    description:
      "Created an intuitive expense tracker application,which allows users to manage their finances effectively.Implemented features like adding expenses,delete expenses,calculate current balance dynamically,shows the transactions summary in an organized way and help users track their spending habits.",
    link: "https://expense-tracker-sai-surya-teja.vercel.app/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/expense-tracker",
  },
  {
    image: "/projectImages/todo-p-img.png",
    category: "vanilla js",
    name: "Todo App",
    techUsed: ["vannila javascript", "html5", "css3", "local Storage", "CRUD"],
    description:
      "Developed a user-friendly To-do app in which Users can create tasks,mark them as complete,delete tasks and organize their tasks based on priority.Implemented a clean and minimalistic design to enhance productivity.Todo tasks will persists even after we refresh or close the page,As it stores data on the localStorage of the Browser.",
    link: "https://tejatodosapp.ccbp.tech/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/to-do-app-js",
  },
  {
    image: "/projectImages/food-munch-p-img.png",
    category: "HTML CSS",
    name: "Food Munch",
    techUsed: ["html5", "css3", "responsive-web-design", "bootstrap"],
    description:
      "Designed and developed an online food website which is providing users with a visually appealing interface to explore a variety of cuisines. Implemented features like menu browsing with rich User Interface.This is a responsive application which adjusts according to the size of the device.",
    link: "https://tejafmunchapp.ccbp.tech/",
    github: "https://github.com/SaiSuryaTejaChavatapalli/food-munch-app",
  },
];
