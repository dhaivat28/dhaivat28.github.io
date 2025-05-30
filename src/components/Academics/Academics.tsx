import { academics, courses } from "./utils";

export const Academics = () => {
  return (
    <div className="container mx-auto flex p-4">
      <div className="flex-1/2 p-4">
        <h2 className="font-nunito font-extrabold text-2xl sm:text-3xl mb-6">
          Education
        </h2>

        <div className="space-y-6">
          {academics.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row">
                <div>
                  <h3 className="text-xl font-semibold font-nunito">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {edu.school}, {edu.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 mt-2 sm:mt-0">
                  {edu.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1/2 p-4">
        <h2 className="font-nunito font-extrabold text-2xl sm:text-3xl mb-6">
          Courses
        </h2>

        <div className="space-y-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold font-nunito">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {course.provider}
                  </p>
                  {course.certificate && (
                    <a
                      href={course.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 inline-block"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
                <span className="text-sm text-gray-500 mt-2 sm:mt-0">
                  {course.date}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
