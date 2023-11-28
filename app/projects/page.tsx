"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { projectData } from "../_constants/projectsData";

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const ProjectsPage = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  console.log("Filtered Projects", filteredProjects);
  return (
    <section className="container min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto text-primary">
          My Projects
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={"all projects"} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((cateory, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(cateory)}
                  value={cateory}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {cateory}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsPage;
