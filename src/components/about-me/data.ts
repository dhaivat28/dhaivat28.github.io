import {
  AngularTech,
  // DevOps & Cloud
  AwsTech,
  CapacitorTech,
  CircleCITech,
  // Testing
  CypressTech,
  DockerTech,
  // Business Tools
  Dynamics365Tech,
  ExpressJsTech,
  FastlaneTech,
  GithubActionsTech,
  GraphQLTech,
  HasuraTech,
  IonicTech,
  JestTech,
  JiraTech,
  MikroOrmTech,
  // Backend
  NodeJsTech,
  PostgresTech,
  PrismaTech,

  // Mobile
  ReactNativeTech,
  // Frontend
  ReactTech,
  ReduxTech,
  RTLTech,
  TailwindTech,
  TestFlightTech,
} from "../shared/technology-logos";

export interface Technologies {
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
export interface TechStack {
  title: string;
  technologies: Technologies[];
}

export const FRONTEND_TECHNOLOGIES: Technologies[] = [
  ReactTech,
  ReduxTech,
  TailwindTech,
  AngularTech,
];

export const BACKEND_TECHNOLOGIES: Technologies[] = [
  NodeJsTech,
  ExpressJsTech,
  GraphQLTech,
  MikroOrmTech,
  PostgresTech,
  HasuraTech,
  PrismaTech,
];

export const MOBILE_TECHNOLOGIES: Technologies[] = [
  ReactNativeTech,
  IonicTech,
  CapacitorTech,
];

export const DEVOPS_AND_CLOUD: Technologies[] = [
  AwsTech,
  DockerTech,
  CircleCITech,
  GithubActionsTech,
  FastlaneTech,
];

export const TESTING_TECHNOLOGIES: Technologies[] = [
  CypressTech,
  JestTech,
  TestFlightTech,
  RTLTech,
];

export const BUSINESS_TOOLS: Technologies[] = [Dynamics365Tech, JiraTech];

export const TECH_STACK: TechStack[] = [
  {
    title: "Frontend",
    technologies: FRONTEND_TECHNOLOGIES,
  },
  {
    title: "Backend",
    technologies: BACKEND_TECHNOLOGIES,
  },
  {
    title: "Business Tools",
    technologies: BUSINESS_TOOLS,
  },
  {
    title: "Mobile Development",
    technologies: MOBILE_TECHNOLOGIES,
  },
  {
    title: "DevOps & Cloud",
    technologies: DEVOPS_AND_CLOUD,
  },
  {
    title: "Testing",
    technologies: TESTING_TECHNOLOGIES,
  },
];
