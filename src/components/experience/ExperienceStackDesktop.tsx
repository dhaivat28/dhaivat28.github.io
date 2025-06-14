import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { TechnologyBadge } from "../shared/TechnologyBadge";
import { ExperienceKey, MY_EXPERIENCES as experiences } from "./data";
import { formatYearMonth, getExperienceDuration } from "./utils";

export const ExperienceStackDesktop = () => {
  const [selectedExperienceKey, setSelectedExperienceKey] =
    useState<ExperienceKey>(ExperienceKey.BingoIndustries);

  const selectedExperience = useMemo(() => {
    const selectedExperience = experiences.find(
      (ex) => ex.key === selectedExperienceKey
    );
    return selectedExperience || experiences[0];
  }, [selectedExperienceKey]);

  return (
    <div className="container mx-auto flex p-4">
      <div className="flex-2/6 p-4">
        <p className="font-nunito font-extrabold text-4xl">My Experience</p>

        <div className="flex mt-8">
          {/* Vertical segmented line */}
          <div className="flex flex-col items-center space-y-2">
            {experiences.map(({ key }) => (
              <div
                key={key}
                className={`w-1 min-h-[60px] rounded-sm transition-colors duration-500 ease-in-out
                  ${
                    selectedExperienceKey === key
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }
            `}
              />
            ))}
          </div>

          {/* Experience list */}
          <div className="ml-4 space-y-2">
            {experiences.map(({ key, company }) => (
              <div
                key={key}
                onClick={() => setSelectedExperienceKey(key)}
                className="cursor-pointer text-lg font-nunito font-medium text-gray-800 hover:text-blue-600 h-[60px] flex flex-col justify-center"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
        {/* End */}
      </div>

      <div className="flex-4/6 p-4 relative">
        <div className="mt-10 h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExperienceKey}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="p-4"
            >
              {/* Title and Company */}
              <h3 className="text-lg font-nunito font-semibold">
                {selectedExperience?.title}{" "}
                <span className="text-gray-600 font-semibold font-nunito">
                  @ {selectedExperience?.company}
                </span>
              </h3>

              <div className="flex items-center gap-4">
                {/* Job Dates */}
                <p className="font-nunito font-semibold text-gray-500">
                  {formatYearMonth(selectedExperience.startDate)} -{" "}
                  {selectedExperience.endDate
                    ? formatYearMonth(selectedExperience.endDate)
                    : "Present"}
                </p>
                {/* Job Duration */}
                <span className="font-nunito text-gray-500">
                  [
                  {getExperienceDuration(
                    selectedExperience.startDate,
                    selectedExperience.endDate
                  )}
                  ]
                </span>
              </div>
              <p
                className="font-nunito text-base text-gray-700 mt-6"
                dangerouslySetInnerHTML={{
                  __html: selectedExperience?.description ?? "",
                }}
              />

              <h4 className="font-nunito font-semibold text-lg mt-4">
                Technology Stack:
              </h4>

              <div className="flex flex-wrap gap-2.5 mt-2.5">
                {selectedExperience.tecStack.map(({ name, icon }) => (
                  <TechnologyBadge Icon={icon} name={name} key={name} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
