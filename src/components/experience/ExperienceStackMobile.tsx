import { TechnologyBadge } from "../shared/TechnologyBadge";
import { MY_EXPERIENCES as experiences } from "./data";
import { formatYearMonth, getExperienceDuration } from "./utils";

export const ExperienceStackMobile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="p-4">
        <p className="font-nunito font-extrabold text-2xl sm:text-3xl mb-6">
          My Experience
        </p>
        <div className="relative">
          <div className="absolute left-[180px] top-1 bottom-0 w-2 rounded-xl bg-gray-300"></div>
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex mb-12">
              <div className="min-w-[180px] text-right pr-4 pt-0.5">
                <p className="font-nunito font-semibold text-gray-500 text-md">
                  {formatYearMonth(exp.startDate)} -{" "}
                  {exp.endDate ? formatYearMonth(exp.endDate) : "Present"}
                </p>
                <span className="font-nunito text-gray-400 text-sm">
                  {getExperienceDuration(exp.startDate, exp.endDate)}
                </span>
              </div>

              {/* Dot and content wrapper */}
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="absolute left-1/2 -translate-x-1 translate-y-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-nunito">
                    {exp.title}{" "}
                    <span className="text-gray-500 font-normal font-nunito">
                      @ {exp.company}
                    </span>
                  </h3>
                  <p
                    className="font-nunito text-gray-700 mt-1"
                    dangerouslySetInnerHTML={{
                      __html: exp.description,
                    }}
                  />
                  <h4 className="font-nunito font-semibold text-lg mt-4">
                    Technology Stack:
                  </h4>

                  <div className="flex flex-wrap gap-2.5 mt-2.5">
                    {exp.tecStack.map(({ name, icon }) => (
                      <TechnologyBadge Icon={icon} name={name} key={name} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
