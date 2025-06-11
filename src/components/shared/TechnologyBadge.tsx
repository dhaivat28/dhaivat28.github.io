import type { FunctionComponent } from "react";

interface TechnologyBadgeProps {
  name: string;
  Icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const TechnologyBadge: FunctionComponent<TechnologyBadgeProps> = ({
  name,
  Icon,
}) => (
  <span className="flex cursor-pointer items-center gap-2 rounded-md border border-black/20 px-2 py-1 font-mono font-medium text-neutral-500 duration-200 hover:bg-black/5 motion-reduce:transition-none w-fit">
    <Icon className="w-5 h-5" />
    {name}
  </span>
);
