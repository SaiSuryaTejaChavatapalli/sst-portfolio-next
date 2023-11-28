type ProjectsLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "My Projects",
  description: "Projects Page of Sai Surya Teja Portfolio",
};
const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return <div>{children}</div>;
};

export default ProjectsLayout;
