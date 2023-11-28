"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//swiper styles
import "swiper/css";
import "swiper/css/pagination";
//modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
    github: "",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Nexa Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
    github: "",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Nexa Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
    github: "",
  },
  {
    image: "/work/4.png",
    category: "full stack",
    name: "Nexa Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
    github: "",
  },
  {
    image: "/work/2.png",
    category: "vannila js",
    name: "Nexa Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
    github: "",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
    github: "",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            distinctio, facere quis pariatur nulla, nostrum quam soluta
            obcaecati laborum dolor earum.
          </p>
          <Link href={"/projects"}>
            <Button>View all Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            navigation
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* First four projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
