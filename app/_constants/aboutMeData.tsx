import {
  RiHtml5Fill,
  RiCss3Fill,
  RiReactjsFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import {
  BiLogoRedux,
  BiLogoMongodb,
  BiLogoVisualStudio,
  BiLogoPython,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaGit, FaGithub } from "react-icons/fa";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sai Surya Teja",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 98854 32575",
  },
  {
    icon: <MailIcon size={20} />,
    text: "saisuryateja3@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 18 Nov, 2000",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors on Electronics and communication engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Andhra Pradesh, India",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Rajiv Gandhi University of Knowledge Technologies, AP.",
        qualification: "Bachelor of Technology",
        years: "2018-2022",
      },
      {
        university: "Rajiv Gandhi University of Knowledge Technologies, AP.",
        qualification: "Pre University Course",
        years: "2016-2018",
      },
      {
        university: "ZPP High School, AP.",
        qualification: "10 th Standard",
        years: "2015-2016",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Persistent Systems",
        role: "Software Engineer",
        years: "July 2022-present",
      },
    ],
  },
];
export const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "ReactJS",
        icon: <RiReactjsFill />,
      },
      {
        name: "Javascript",
        icon: <RiJavascriptFill />,
      },
      {
        name: "HTML5",
        icon: <RiHtml5Fill />,
      },
      {
        name: "CSS3",
        icon: <RiCss3Fill />,
      },
      {
        name: "NextJS",
        icon: <TbBrandNextjs />,
      },
      {
        name: "TailwindCSS",
        icon: <BiLogoTailwindCss />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript />,
      },
      {
        name: "Redux",
        icon: <BiLogoRedux />,
      },
      {
        name: "MongoDB",
        icon: <BiLogoMongodb />,
      },
      {
        name: "Python",
        icon: <BiLogoPython />,
      },
      {
        name: "SQL",
        icon: <TbSql />,
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        name: "VS Code",
        icon: <BiLogoVisualStudio />,
      },
      {
        name: "Git",
        icon: <FaGit />,
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
      },
    ],
  },
];
