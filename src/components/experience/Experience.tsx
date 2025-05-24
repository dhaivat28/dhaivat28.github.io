import { experiences, formatYearMonth, getExperienceDuration } from "./utils";

export const Experience = () => {
  return (
    <div className="container mx-auto mt-12 flex p-4 border-dotted border-1 border-red-500">
      <div className="flex-1/4 p-4 border-dotted border-1 border-blue-500">
        <p className="font-nunito font-extrabold text-4xl">My Experience</p>
        <p className="font-nunito font-normal text-md mt-4">
          I've had the pleasure of working with companies across various
          industries — from technology and design to logistics and construction.
          This diverse experience has not only broadened my perspective but also
          strengthened my ability to adapt quickly, collaborate with
          cross-functional teams, and deliver solutions that align with each
          industry's unique goals and challenges.
        </p>
      </div>

      <div className="flex-3/4 p-4 border-dotted border-1 border-blue-500">
        <div className="relative">
          <div className="absolute left-[250px] top-1 bottom-0 w-2 rounded-xl bg-gray-300"></div>
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex mb-12">
              <div className="min-w-[250px] text-right pr-4 pt-0.5">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
