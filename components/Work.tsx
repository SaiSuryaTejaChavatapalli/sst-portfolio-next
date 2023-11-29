"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//modules
import { Pagination, Navigation } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/app/_constants/projectsData";
const Work = () => {
  return (
    <section className="mb-12 xl:mb-20 xl:pr-4 ">
      <div className="container mx-auto flex flex-col xl:flex-row gap-x-8  py-7">
        <div className="max-w-[500px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle">Come and have a look at the work i did.</p>
          <Link href={"/projects"}>
            <Button>View all Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:w-[900px]">
          <Swiper
            className=""
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            navigation={true}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            pagination={{
              type: "fraction",
            }}
          >
            {/* First four projects */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="flex flex-col items-center justify-center mb-10"
                >
                  <ProjectCard project={project} ellipsisStyle="line-clamp-5" />
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
