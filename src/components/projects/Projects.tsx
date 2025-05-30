import { useCallback, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import {
  ProjectCategory,
  PROJECTS_DATA as projectsData,
  type ProjectItem,
} from "./util";

export const Projects = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(projectsData);
  const [category, setCategory] = useState<ProjectCategory>(
    ProjectCategory.All
  );

  const filterProjectByCategory = useCallback(
    (filterByCategory: ProjectCategory) => {
      if (filterByCategory === category) return;

      setCategory(filterByCategory);
      setProjects(
        projectsData.filter((project) =>
          project.category.includes(filterByCategory)
        )
      );
    },
    [category]
  );

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <p className="font-nunito font-semibold text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {Object.values(ProjectCategory).map((category) => (
          <button
            key={category}
            className="px-8 py-2 border rounded-md text-ocean-blue border-ocean-blue hover:bg-ocean-blue hover:text-white transition cursor-pointer font-nunito font-semibold"
            onClick={() => filterProjectByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap mt-8 gap-10">
        {projects.map((projectItem) => (
          <ProjectCard key={projectItem.id} {...projectItem} />
        ))}
      </div>
    </div>
  );
};
