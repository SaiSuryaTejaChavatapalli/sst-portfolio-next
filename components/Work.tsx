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
import { projectData } from "@/app/_constants/projectsData";
const Work = () => {
  return (
    <section className="mb-12 xl:mb-48 ">
      <div className="container mx-auto flex flex-col xl:flex-row gap-x-6">
        <div className="max-w-[500px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle">Come and have a look at the work i did.</p>
          <Link href={"/projects"}>
            <Button>View all Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] ">
          <Swiper
            className="pt-2"
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
