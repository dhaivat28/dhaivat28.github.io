import { ReactComponent as AwsLogo } from "../../assets/tech-stack-icons/amazonwebservices-original-wordmark.svg";
import { ReactComponent as AngularLogo } from "../../assets/tech-stack-icons/angular-original.svg";
import { ReactComponent as CapacitorLogo } from "../../assets/tech-stack-icons/capacitor-original.svg";
import { ReactComponent as CirceleCILogo } from "../../assets/tech-stack-icons/circleci-plain.svg";
import { ReactComponent as CypressLogo } from "../../assets/tech-stack-icons/cypressio-original.svg";
import { ReactComponent as DocketLogo } from "../../assets/tech-stack-icons/docker-original.svg";
import { ReactComponent as Dynamics365Logo } from "../../assets/tech-stack-icons/Dynamics365_scalable.svg";
import { ReactComponent as ExpressJsLogo } from "../../assets/tech-stack-icons/express-original.svg";
import { ReactComponent as FastLaneLogo } from "../../assets/tech-stack-icons/fastlane.svg";
import { ReactComponent as GithubLogo } from "../../assets/tech-stack-icons/github-original.svg";
import { ReactComponent as GraphqlLogo } from "../../assets/tech-stack-icons/graphql-plain.svg";
import { ReactComponent as HasuraLogo } from "../../assets/tech-stack-icons/hasura.svg";
import { ReactComponent as IonicLogo } from "../../assets/tech-stack-icons/ionic-original.svg";
import { ReactComponent as JestLogo } from "../../assets/tech-stack-icons/jest-plain.svg";
import { ReactComponent as JiraLogo } from "../../assets/tech-stack-icons/jira-original.svg";
import { ReactComponent as MikroOrmLogo } from "../../assets/tech-stack-icons/mikro-orm.svg";
import { ReactComponent as NodeJsLogo } from "../../assets/tech-stack-icons/nodejs-original.svg";
import { ReactComponent as PostgresLogo } from "../../assets/tech-stack-icons/postgresql-original.svg";
import { ReactComponent as PrismaLogo } from "../../assets/tech-stack-icons/prisma-original.svg";
import { ReactComponent as ReactLogoSvg } from "../../assets/tech-stack-icons/react-original.svg";
import { ReactComponent as ReduxLogo } from "../../assets/tech-stack-icons/redux-original.svg";
import { ReactComponent as RTLLogo } from "../../assets/tech-stack-icons/rtl.svg";
import { ReactComponent as TailwindLogo } from "../../assets/tech-stack-icons/tailwindcss-original-wordmark.svg";
import { ReactComponent as TestFlightLogo } from "../../assets/tech-stack-icons/testFlight.svg";

export interface Technologies {
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
export interface TechStack {
  title: string;
  technologies: Technologies[];
}

const FRONTEND_TECHNOLOGIES: Technologies[] = [
  {
    name: "React",
    icon: ReactLogoSvg,
  },
  {
    name: "Redux",
    icon: ReduxLogo,
  },
  {
    name: "Tailwind",
    icon: TailwindLogo,
  },
  {
    name: "Angular",
    icon: AngularLogo,
  },
];

const BACKEND_TECHNOLOGIES: Technologies[] = [
  {
    name: "Node.js",
    icon: NodeJsLogo,
  },
  {
    name: "Express.js",
    icon: ExpressJsLogo,
  },
  {
    name: "GraphQL",
    icon: GraphqlLogo,
  },
  {
    name: "MikroORM",
    icon: MikroOrmLogo,
  },
  {
    name: "Postgres",
    icon: PostgresLogo,
  },
  {
    name: "Hasura",
    icon: HasuraLogo,
  },
  {
    name: "Prisma",
    icon: PrismaLogo,
  },
];

const MOBILE_TECHNOLOGIES: Technologies[] = [
  {
    name: "React Native",
    icon: NodeJsLogo,
  },
  {
    name: "IONIC",
    icon: IonicLogo,
  },
  {
    name: "CapacitorJs",
    icon: CapacitorLogo,
  },
];

const DEVOPS_AND_CLOUD: Technologies[] = [
  {
    name: "AWS Serverless / CDK",
    icon: AwsLogo,
  },
  {
    name: "Docker",
    icon: DocketLogo,
  },
  {
    name: "CirceleCI",
    icon: CirceleCILogo,
  },
  {
    name: "Github Actions",
    icon: GithubLogo,
  },
  {
    name: "Fastlane",
    icon: FastLaneLogo,
  },
];

const TESTING_TECHNOLOGIES: Technologies[] = [
  {
    name: "Cypress",
    icon: CypressLogo,
  },
  {
    name: "Jest",
    icon: JestLogo,
  },
  {
    name: "TestFlight",
    icon: TestFlightLogo,
  },
  {
    name: "React Testing Library",
    icon: RTLLogo,
  },
];

export const BUSINESS_TOOLS: Technologies[] = [
  {
    name: "Microsoft Dyanmics 365",
    icon: Dynamics365Logo,
  },
  {
    name: "Jira / Confluence",
    icon: JiraLogo,
  },
];

export interface Technologies {
  name: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
export interface TechStack {
  title: string;
  technologies: Technologies[];
}

export const TECH_STACK = [
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
