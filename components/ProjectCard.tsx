import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

type ProjectCardProps = {
  project: {
    image: string;
    link: string;
    github: string;
    category: string;
    name: string;
    description: string;
  };
};
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center">
          <Image
            src={project.image}
            width={350}
            height={350}
            alt="project-img"
            className="absolute bottom-0 shadow-2xl rounded-lg"
            priority
          />
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              target="_blank"
              className="bg-gray-800 dark:bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-100"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="bg-gray-800 dark:bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-100"
            >
              <Github className="text-white" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
