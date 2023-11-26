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
import Image from "next/image";
import DevImg from "./DevImg";

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
        university: "ZPP High School",
        qualification: "10 th Standard",
        years: "2015-2016",
      },
      {
        university: "Rajiv Gandhi University of Knowledge Technologies",
        qualification: "Pre University Course",
        years: "2017-2018",
      },
      {
        university: "Rajiv Gandhi University of Knowledge Technologies",
        qualification: "Bachelor of Technology",
        years: "2018-2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Persistent Systems",
        qualification: "Software Engineer",
        years: "2022-present",
      },
    ],
  },
];
const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, ReactJS",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr: { title: string }[], title: string) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 py-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex xl:flex-1 relative">
            <DevImg
              containerStyles={"bg-no-repeat relative"}
              imgSrc={"/about/developer.png"}
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
                    <div className="text-primary">Language Skill</div>
                    <div className="border-b"></div>
                    <div>English, Telugu</div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">Qualifications</TabsContent>
                <TabsContent value="skills">Skills Info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
