import { TechstackBadgeContainer } from "./TechstackBadge";
import { TECH_STACK as techStack } from "./data";

export const AboutMe = () => {
  return (
    <div className="flex container mx-auto border-dotted p-4 flex-col xl:flex-row">
      <div className="flex-1/2 p-4">
        <h2 className="font-nunito font-extrabold text-2xl sm:text-3xl mb-6">
          About me...
        </h2>
        <p className="font-nunito font-normal text-md text-gray-600">
          My journey in software development began in high school, where I was
          introduced to HTML and CSS. What started as a fascination with
          building static websites quickly evolved into a deep passion for
          creating impactful, scalable web applications.
          <br />
          <br />
          At 17, I founded Aspiorn Web Solutions, a web development business
          that served local clients. This entrepreneurial venture taught me
          early lessons in project management, client communication, and
          delivering value-driven software — laying the groundwork for my
          professional career.
          <br />
          <br />
          After earning a Bachelor’s in Computer Science & Engineering, I
          relocated to Australia to pursue a Master’s in Information Technology
          at Charles Sturt University, where I specialized in Software Design
          and Development. Post-graduation, I joined a tech startup as a Junior
          Software Engineer and contributed across the full stack — building
          applications with React and Node.js while also learning about cloud
          infrastructure on AWS.
          <br />
          <br /> Since then, I’ve spent the last five years building and scaling
          software systems across fintech, environmental services, and martech
          domains. My focus has consistently been on delivering maintainable,
          performant, and user-centric solutions that align closely with
          business goals.
          <br />
          <br />
          Outside of work, I enjoy building side projects to experiment with new
          tools, and I’m always eager to stay updated with evolving
          technologies. When offline, you'll find me exploring nature,
          traveling, or spending quality time with family.
        </p>
      </div>
      <div className="flex-1/2 p-4 border-dotted">
        <h2 className="font-nunito font-extrabold text-2xl sm:text-3xl mb-6">
          Technologies I have worked with...
        </h2>
        <p className="font-nunito font-normal text-md text-gray-600 mb-4">
          I have worked across a diverse range of technologies, from frontend to
          backend, and I am always eager to learn new tools and frameworks. Here
          are some of the key technologies I have experience with:
        </p>

        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {techStack.slice(0, 3).map(({ title, technologies }) => (
              <TechstackBadgeContainer
                key={title}
                title={title}
                technologies={technologies}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {techStack.slice(3, 6).map(({ title, technologies }) => (
              <TechstackBadgeContainer
                key={title}
                title={title}
                technologies={technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
