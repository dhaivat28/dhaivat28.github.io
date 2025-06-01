import { TechnologyBadge } from "../shared/TechnologyBadge";
import type { TechStack } from "./utilt";

export const TechstackBadgeContainer = ({ title, technologies }: TechStack) => {
  return (
    <div
      key={title}
      className="relative w-fit border-2 rounded-md border-gray-500 pt-10 pl-2 pr-2 pb-2"
    >
      <span className="absolute bg-gray-500 top-0 left-0 text-sm font-nunito font-normal text-white px-2 py-1 rounded-br-md">
        {title}
      </span>
      <div className="flex flex-wrap gap-2">
        {technologies.map(({ icon: Icon, name }) => (
          <TechnologyBadge Icon={Icon} name={name} key={name} />
        ))}
      </div>
    </div>
  );
};
