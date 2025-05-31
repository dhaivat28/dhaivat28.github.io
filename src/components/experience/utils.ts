import { DateTime } from "luxon";

export enum ExperienceKey {
  BingoIndustries = "Bingo Industries",
  Ezypay = "Ezypay",
  RevTechMedia = "RevTech Media",
}

export const experiences = [
  {
    title: "Full Stack Developer",
    company: "Bingo Industries",
    startDate: "2023-01",
    endDate: null,
    key: ExperienceKey.BingoIndustries,
    description: `Bingo Industries, a <b>leading waste management company in Australia</b>, embarked on a full-scale digital transformation to retire its aging legacy systems. The challenge was to build a modern, enterprise-grade platform <b>GoCollect</b> to manage <b>real-time job servicing, fleet operations, and logistics</b> across multiple departments handling <b>over 2,500 jobs daily</b>.

    <br><br>

    As a <b>Full Stack Developer</b>, I contributed towards building and scaling this ecosystem of integrated <b>web, desktop, and mobile applications</b>. I translated <b>Figma designs</b> into <b>responsive, accessible UIs</b> in a <b>React + TypeScript</b> environment, powering the <b>allocator-facing application used by 50+ staff</b>. I also built and maintained <b>features for the React Native Driver App</b>, used by <b>1,000+ drivers</b> across Australia for daily bin collection and servicing.

    <br><br>

    On the backend, I built and maintained <b>GraphQL APIs</b> using <b>Node.js, Apollo Server, MikroORM, and PostgreSQL</b> to facilitate seamless integration with front-end services and <b>Microsoft Dynamics 365</b>. I also engineered <b>serverless microservices</b> using <b>AWS Lambda, SQS, and SNS</b>—one set to integrate with a <b>Job Optimization API</b> for <b>dynamic scheduling</b>, and another to <b>automate job and runsheet generation</b> based on <b>Customer Service Agreements</b>.`,
  },
  {
    title: "Software Engineer (Frontend)",
    company: "Ezypay",
    startDate: "2020-03",
    endDate: "2022-12",
    key: ExperienceKey.Ezypay,
    description: `Ezypay is a leading subscription and payment collection provider in the Asia-Pacific region, offering embedded payment solutions for SaaS companies and technology platforms. I worked on two major projects—<b>Ezypay Merchant Platform</b>, a standalone Progressive Web App (PWA) for Ezypay’s clients, and <b>EVA</b>, an internal support tool for handling customer inquiries related to payments and subscriptions.

    <br><br>

    As a core contributor to the <b>Ezypay Merchant Platform</b>, I collaborated closely with UI/UX designers and product managers to shape user flows, wireframes, and early application screens. I developed reusable components in <b>Angular 10+</b> with <b>NgRx</b> and <b>Capacitor</b>, and integrated them with a backend powered by <b>Apollo Server, GraphQL, Hasura and PostgreSQL</b>. I also containerized services using <b>Docker</b> to deploy them via <b>AWS ECS</b> and <b>Fargate</b>, and set up a <b>CI/CD pipeline using CircleCI</b> and <b>Fastlane</b>, enabling continuous delivery to the web, <b>Android (Play Store)</b>, and <b>iOS (App Store)</b>.

    <br><br>

    For <b>EVA</b>, built with <b>Vue.js</b> and <b>Vuex</b>, I implemented new features and did bug fixes to ensure reliability, using <b>GraphQL APIs</b> powered by <b>Apollo Server</b>, and <b>Hasura</b>, enabling efficient data handling and performance for support teams. I also worked on other <b>Ezypay</b> products like <b>Checkout</b>, <b>PayNow</b>, and the <b>Hosted Payment Page</b>.`,
  },
  {
    title: "Junior Software Engineer",
    company: "RevTech Media",
    startDate: "2019-09",
    endDate: "2019-11",
    key: ExperienceKey.RevTechMedia,
    description: `RevTech Media is a marketing and technology services company specializing in distributing insurance, utilities, telco, and financial products across the globe. I worked on the development of the <b>One Big Switch</b> platform, enabling users to discover the best utility deals and access exclusive discounts through collective buying power.

    <br><br>

  As a Full Stack developer, I developed marketing and lead generation single-page applications for <b>One Big Switch</b>, <b>FiftyUp Club</b>, and <b>9 Saver</b>, building reusable components using <b>React.js</b> and <b>Redux</b>, and ensuring quality through <b>React Testing Library</b> and <b>Jest</b>. On the backend, I built scalable REST APIs using <b>AWS Lambda</b>, <b>Node.js</b>, <b>Amazon API Gateway</b>, and <b>DynamoDB</b>, following a serverless architecture pattern and seamlessly integrating new services into the existing platform using <b>AWS CloudFormation</b>.`,
  },
];

export const formatYearMonth = (isoYearMonth: string) =>
  DateTime.fromISO(isoYearMonth).toFormat("LLL yyyy");

export const getExperienceDuration = (
  startDate: string,
  endDate: string | null
) => {
  const start = DateTime.fromISO(startDate);
  const end = endDate ? DateTime.fromISO(endDate) : DateTime.now();
  const diff = end.diff(start, ["years", "months"]).toObject();
  const years = Math.floor(diff.years ?? 0);
  const months = Math.floor(diff.months ?? 0);
  const yearStr = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";
  return [yearStr, monthStr].filter(Boolean).join(" ");
};
