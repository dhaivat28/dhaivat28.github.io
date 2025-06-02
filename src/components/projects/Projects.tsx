import { ProjectCard } from "./ProjectCard";
import { PROJECTS_DATA as projectsData } from "./util";

export const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <p className="font-nunito font-semibold text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light pb-8">
          Projects Portfolio
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 a md:flex-row md:gap-10 md:flex-wrap">
        {projectsData.map((projectItem) => (
          <ProjectCard key={projectItem.id} {...projectItem} />
        ))}
      </div>
    </div>
  );
};
