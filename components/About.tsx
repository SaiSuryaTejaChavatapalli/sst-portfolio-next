import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { FaGit, FaGithub } from "react-icons/fa";
import DevImg from "./DevImg";
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
const infoData = [
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

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Rajiv Gandhi University of Knowledge Technologies",
        qualification: "Bachelor of Technology",
        years: "2018-2022",
      },
      {
        university: "Rajiv Gandhi University of Knowledge Technologies",
        qualification: "Pre University Course",
        years: "2016-2018",
      },
      {
        university: "ZPP High School",
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
const skillsData = [
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
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[900px] pb-12 py-12 xl:py-24 xl:mb-6">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex xl:flex-1 relative">
            <DevImg
              containerStyles={"bg-no-repeat relative w-[500px] h-[500px]"}
              imgSrc={"/about/aboutme.png"}
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-16 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4 ">
                      Unmatched Service Quality for over 10 years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specalize in crafting intuitive websites with
                      cutting-edge technology, deliverying dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12 ">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b"></div>
                      <div>English, Telugu</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper*/}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <div className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </div>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <div className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </div>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-12">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/*skills list */}
                      <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
                        {getData(skillsData, "skills").data.map(
                          (item, index) => {
                            const { name, icon } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center justify-center"
                              >
                                <div className="text-6xl text-primary">
                                  {icon}
                                </div>
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h3>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            const { name, icon } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center justify-center"
                              >
                                <div className="text-5xl text-primary">
                                  {icon}
                                </div>
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
